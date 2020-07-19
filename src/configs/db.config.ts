// Modules
import Knex from 'knex';
import appConfig from './app.config'

// Initialize knex.
const knex = Knex({
  client: 'mysql',
  connection: {
    host: appConfig.db.host,
    user: appConfig.db.user,
    password: appConfig.db.password,
    database: appConfig.db.database
  },
  debug: false, // change this value to "true". If you want to enable debug mode.
  pool: {
    min: 1,
    max: 20
  }
});

export default knex;