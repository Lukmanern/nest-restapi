import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TransfersModule } from './transfers/transfers.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGateway } from './chat.gateway';
import { EventsModule } from './_events/events.module';
import { DbBackupsModule } from './db_backups/db_backups.module';

@Module({
  imports: [
    UsersModule,
    TransfersModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    EventsModule,
    DbBackupsModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
