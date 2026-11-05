import { Injectable } from '@nestjs/common';
import {
  NotificationsGateway,
  Notification,
} from '../websocket/notifications.gateway';
import { randomUUID } from 'crypto';

@Injectable()
export class NotificationsService {
  constructor(private readonly gateway: NotificationsGateway) {}

  send(input: { title: string; body: string }) {
    const notification: Notification = {
      id: randomUUID(),
      title: input.title,
      body: input.body,
      timestamp: Date.now(),
    };
    this.gateway.broadcast(notification);
  }
}
