import { Module } from '@nestjs/common';
import { NotificationsGateway } from './websocket/notifications.gateway';
import { NotificationsService } from './notifications/notifications.service';
import { NotificationsController } from './notifications/notifications.controller';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [NotificationsGateway, NotificationsService],
})
export class AppModule {}
