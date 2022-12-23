import dotenv from 'dotenv';
import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '.env'),
});

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_HOST } = process.env;
const LOCAL_URL = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

// export default {
//   type: 'postgres',
//   cache: false,
//   url: (process.env.DATABASE_URL as string) || LOCAL_URL,
//   synchronize: false,
//   logging: false,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// } as DataSourceOptions;

export const connectionSource = new DataSource({
  type: 'postgres',
  cache: false,
  url: 'postgres://kanban_api_postgre_user:8iL6CfF1g43isE2tkSNsCUcLAzpjNNjW@dpg-cdnnq1irrk05dt1o4uc0-a.frankfurt-postgres.render.com/kanban_api_postgre',
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
