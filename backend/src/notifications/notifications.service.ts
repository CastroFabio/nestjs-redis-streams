import { Injectable } from '@nestjs/common';
import {
  Notification,
  NotificationsGateway,
} from '../websocket/notifications.gateway.js';
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
