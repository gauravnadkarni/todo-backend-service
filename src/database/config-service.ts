import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { dataSourceOptions } from './datasource';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService= configService;
  }
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get('DB_HOST_TYPE'),
      host: this.configService.get('DB_HOST'),
      port: +this.configService.get('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      entities: [__dirname + this.configService.get('DB_ENTITY_LOCATION')],
      migrations: [__dirname + this.configService.get('DB_MIGRATIONS_LOCATION_REGEX')],
      synchronize: false,
    } as DataSourceOptions
  }
}
