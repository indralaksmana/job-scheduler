// Modules
import _ from 'lodash';
import path, { join } from 'path';
import ExcelJS from 'exceljs';
import knex from './config/db.config';
import { Model } from 'objection';
import bullArena from 'bull-arena';
import express, {Application, Request, Response} from 'express';

// Configs
import appConfig from './config/app.config';
import { ArenaConfig } from './config/arena.config';

// Helpers
import chunkArrayHelper from './helpers/chunk_array.helper';

// Queues
import importExcelQueue from './queues/import_excel.queue';

// Define variables
const app: Application = express();
const router = express.Router();
const port: number = appConfig.port;

// Give the knex instance to objection.
Model.knex(knex);

// Set list queue into bull arean
const queueNames = ['ImportExcelQueue'];

// Setup bull arena
const arena = bullArena({
  queues: queueNames.map(q => ({
      name: q,
      ...ArenaConfig,
  })),
});

// use bull arena
router.get('/', arena);

// routes
router.get('/import/:file', async (req: Request, res: Response) => {
  try {
    // add delay optio to queue
    const options = {
      delay: 5000, // set queue delay in milliseconds
      attempts: 3 // set how many times to try again if queue fail
    };

    // call chunk array function
    const chunkArray = new chunkArrayHelper();
    const fileLocation = path.join(process.cwd(), `/src/tmp/${req.params.file}`);

    // read excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(fileLocation);

    // read sheet then push all record to array
    const worksheet = workbook.getWorksheet(1);
    worksheet.spliceRows(0,1); // remove excel table header
    const records: any = [];
    worksheet.eachRow({ includeEmpty: false }, async (row, rowNumber) => {
      records.push(JSON.parse(JSON.stringify(row.values)));
    });

    // chunk array into 10000 records then add to queue
    const chunkedArray = chunkArray.do(records, 10000);
    _.forEach(chunkedArray, async (arr) => {
      await importExcelQueue.add({ records: arr }, options).then((importExcelJob) => {
        importExcelJob.finished();
      });
    });

    // return success response if all job has been created
    return res.status(200).send({ status: `Job import excel with ${worksheet.rowCount} records has been added to queues` });
  } catch(err) {
    // return error respose if create jobs was failed
    return res.status(500).json({'error': err });
  }
});

// use express router
app.use(router);

// listen server
app.listen(port, err => {
    if (err) return console.error(err);
    return console.log(`server is listening on ${port}`);
});