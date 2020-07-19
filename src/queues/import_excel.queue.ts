// Modules
import Queue from 'bull';
import appConfig from '../config/app.config';
import ImportExcelJob from '../jobs/import_excel.job';

const importExcelQueue = new Queue('ImportExcelQueue', {
  redis: {
    port: appConfig.redis.port,
    host: appConfig.redis.host,
    password: appConfig.redis.password,
  },
});

const transcodeImportExcel = async (data: any): Promise<any> => { return await data };

interface JobData extends Queue.Job {
  data: {file: string}
}

importExcelQueue.process(async (job: JobData) => {
  const importExcelJob = new ImportExcelJob();
  return await importExcelJob.doJob(job).then(transcodeImportExcel);
});

/*
 * Listen Progress Event
 */
importExcelQueue.on('global:progress', (jobId, progress) => {
  console.log(`Job import excel with id ${jobId} has insert ${progress} record(s) into database.`);
});

/*
 * Listen Complete Event
 */
importExcelQueue.on('global:completed', (jobId, result) => {
  console.log(`Job import excel with id ${jobId} completed with result: ${result}`);
});

export default importExcelQueue;