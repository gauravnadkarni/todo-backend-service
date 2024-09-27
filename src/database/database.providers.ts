import { DataSource } from "typeorm";
import { APP_DATA_SOURCE } from "@/shared/constants";
import { AppDataSource } from "./datasource";
import { ConfigService } from "@nestjs/config";

export const databaseProviders = [
    {
      provide: APP_DATA_SOURCE,
      useFactory: (configService: ConfigService) => {
        console.log(configService,'------------------s-----------------------------------------')
        return{
          type: configService.get('DB_HOST_TYPE') as 'postgres',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('process.env.DB_NAME'),
          entities: [__dirname + configService.get('DB_ENTITY_LOCATION')],
          migrations: [__dirname + configService.get('DB_MIGRATIONS_LOCATION_REGEX')],
          synchronize: false,
      }},
    },
  ]