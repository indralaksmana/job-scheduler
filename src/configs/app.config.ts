// Modules
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  port: parseInt(process.env.APP_PORT, 10),
  redis: {
    port: parseInt(process.env.REDIS_PORT, 10),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD
  },
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  }
};