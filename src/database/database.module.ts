import { Inject, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { TypeOrmConfigService } from './config-service';

export const APP_DATA_SOURCE = 'APP_DATA_SOURCE';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory: (configService: ConfigService) => {
        const typeOrmConfigOptions = new TypeOrmConfigService(configService);
        return typeOrmConfigOptions.createTypeOrmOptions();
      },
      inject: [ConfigService]
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
