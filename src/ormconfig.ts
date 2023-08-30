import dotenv from 'dotenv';
import path from 'path';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

export default {
  type: 'postgres',
  cache: false,
  url: 'postgres://rss_pm_app_postgre_user:VYAK3MQUOKbwgMRfreGry3wlTlH2hz6j@dpg-cjnjtpocfp5c73bndue0-a.frankfurt-postgres.render.com/rss_pm_app_postgre',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
} as ConnectionOptions;
