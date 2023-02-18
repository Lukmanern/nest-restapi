import { Module } from '@nestjs/common';
import { DbBackupsService } from './db_backups.service';
import { DbBackupsController } from './db_backups.controller';

@Module({
  controllers: [DbBackupsController],
  providers: [DbBackupsService],
})
export class DbBackupsModule {}
