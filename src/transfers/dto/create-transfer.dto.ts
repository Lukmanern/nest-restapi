import { ApiProperty } from '@nestjs/swagger';

export class CreateTransferDto {
  @ApiProperty()
  from_user_id: string;

  @ApiProperty()
  to_user_id: string;

  /**
   * amount is ALWAYS MORE THAN ZERO, can't zero
   **/
  @ApiProperty()
  amount: number;
}
