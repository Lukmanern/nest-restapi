import { Test, TestingModule } from '@nestjs/testing';
import { DbBackupsService } from './db_backups.service';

describe('DbBackupsService', () => {
  let service: DbBackupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbBackupsService],
    }).compile();

    service = module.get<DbBackupsService>(DbBackupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
