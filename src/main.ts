import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LogLevel, Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();
const port = process.env['PORT'] || '8080';
const debug: string | undefined = process.env['LOG_DEBUG'];

const levels: LogLevel[] = ['error', 'warn', 'verbose', 'log'];
if (debug) levels.push('debug');


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: levels,
  });
  const logger = new Logger();

  logger.log(`Osteppy server listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
