import dotenv from 'dotenv';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

export default {
  type: 'postgres',
  cache: false,
  url: 'postgresql://postgres:huTZTTvmmBpUUYJWWRcT@containers-us-west-153.railway.app:7301/railway',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
} as DataSourceOptions;

export const connectionSource = new DataSource({
  type: 'postgres',
  cache: false,
  url: 'postgresql://postgres:huTZTTvmmBpUUYJWWRcT@containers-us-west-153.railway.app:7301/railway',
  synchronize: false,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['src/resources/**/**.entity{.ts,.js}'],
  migrations: ['./migrations/*.ts'],
});

(async function run() {
  await connectionSource.initialize();
})();
