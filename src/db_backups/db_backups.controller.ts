import { Controller, Post } from '@nestjs/common';
import { DbBackupsService } from './db_backups.service';

@Controller('db-backups')
export class DbBackupsController {
  constructor(private readonly dbBackupsService: DbBackupsService) {}

  @Post()
  create() {
    return this.dbBackupsService.create();
  }
}
