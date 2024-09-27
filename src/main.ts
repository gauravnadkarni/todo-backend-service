import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { GlobalExceptionFilter } from './shared/exceptions/global-exception-handler';
import { morganCustomFormatter } from './shared/helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan(morganCustomFormatter));
  app.useGlobalFilters(new GlobalExceptionFilter());
  await app.listen(3000);
}
bootstrap();
