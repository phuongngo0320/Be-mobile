import { NestFactory } from '@nestjs/core';
import "./instrument";
// Now import other modules
import * as Sentry from "@sentry/node";
import {
  BaseExceptionFilter,
  HttpAdapterHost,
} from "@nestjs/core";
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.enableCors()
  const config = new DocumentBuilder()
  .setTitle('N3-API')
  .setDescription('N3-API for FinWise applications')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  Sentry.setupNestErrorHandler(app, new BaseExceptionFilter(httpAdapter));
  await app.listen(3000);
  
}
bootstrap();
