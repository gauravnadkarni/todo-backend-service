import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions:DataSourceOptions = {
  type: process.env.DB_HOST_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + process.env.DB_ENTITY_LOCATION],
  migrations: [__dirname + process.env.DB_MIGRATIONS_LOCATION_REGEX],
  synchronize: false,
}

export const AppDataSource = new DataSource(dataSourceOptions);
