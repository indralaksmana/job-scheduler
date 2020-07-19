// Modules
import _ from 'lodash';
import Customer from '../models/customer.model'

export default class ImportExcelJob {

  async doJob (job: any): Promise<any> {
    try {
      // get records from queue
      const records = job.data.records;

      // import all record from queue into database
      let progress = 0;
      _.forEach(records, async (record) => {
        await Customer.query().insert({
          code: _.isNull(record[1]) ? '-' : record[1].toString(),
          name: _.isNull(record[2]) ? '-' : record[2].toString(),
          address: _.isNull(record[3]) ? '-' : record[3].toString(),
          id_parentcust: 1,
          code_parentcust: _.isNull(record[1]) ? '-' : record[1].toString(),
          id_global: 1,
          code_global: _.isNull(record[4]) ? '-' : record[4].toString(),
          id_regional: 1,
          code_regional: _.isNull(record[5]) ? '-' : record[5].toString(),
          id_area: 1,
          code_area: _.isNull(record[6]) ? '-' : record[6].toString(),
          id_province: 1,
          code_province: _.isNull(record[7]) ? '-' : record[7].toString(),
          id_city: 1,
          code_city: _.isNull(record[8]) ? '-' : record[8].toString(),
          id_outlettype: 1,
          code_outlettype: _.isNull(record[11]) ? '-' : record[11].toString(),
          id_channel: 1,
          code_channel: _.isNull(record[9]) ? '-' : record[9].toString(),
          id_subchannel: 1,
          code_subchannel: _.isNull(record[10]) ? '-' : record[10].toString(),
          note: '-',
          status: 1,
          created_user: 1,
          modified_user: 1,
        });
        // count import progress
        progress += 1;
        job.progress(progress);
      });
      return await Promise.resolve({ status: 'success' });
    } catch(err) {
      return await Promise.reject(new Error(`error: ${err}`));
    }
  }

}