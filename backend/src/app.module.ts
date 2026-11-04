import { Module } from '@nestjs/common';
import { NotificationsGateway } from './websocket/notifications.gateway.js';
import { NotificationsService } from './notifications/notifications.service.js';
import { NotificationsController } from './notifications/notifications.controller.js';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [NotificationsGateway, NotificationsService],
})
export class AppModule {}
