import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

console.log(__dirname + process.env.DB_MIGRATIONS_LOCATION_REGEX)
export const dataSourceOptions:DataSourceOptions = {
  type: process.env.DB_HOST_TYPE,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + process.env.DB_ENTITY_LOCATION],
  migrations: [__dirname + process.env.DB_MIGRATIONS_LOCATION_REGEX],
  synchronize: false,
} as DataSourceOptions;

export default new DataSource(dataSourceOptions);
