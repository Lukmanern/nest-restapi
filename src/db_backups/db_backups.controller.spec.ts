import { Test, TestingModule } from '@nestjs/testing';
import { DbBackupsController } from './db_backups.controller';
import { DbBackupsService } from './db_backups.service';

describe('DbBackupsController', () => {
  let controller: DbBackupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DbBackupsController],
      providers: [DbBackupsService],
    }).compile();

    controller = module.get<DbBackupsController>(DbBackupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
