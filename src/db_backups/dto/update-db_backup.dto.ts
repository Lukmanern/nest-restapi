import { PartialType } from '@nestjs/mapped-types';
import { CreateDbBackupDto } from './create-db_backup.dto';

export class UpdateDbBackupDto extends PartialType(CreateDbBackupDto) {}
