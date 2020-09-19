import { Controller, Post, Body, Logger } from '@nestjs/common';
import { join } from 'path';
import { promises as fs } from 'fs';

@Controller()
export class AppController {

  @Post('eod_test')
  async getStatus(@Body() body: { user_name: string }): Promise<string> {
    const logger = new Logger('eodStatus');
    const { user_name } = body;

    const json = await fs.readFile(join(__dirname, '../config_files/status.json'), 'utf8');
    logger.debug(json);
    logger.debug(`EOD status requested by: ${user_name}`);
    return "hello world";
  };
};
