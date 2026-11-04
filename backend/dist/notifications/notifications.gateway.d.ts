import { OnGatewayConnection } from '@nestjs/websockets';
import { NotificationsService } from './notifications.service.js';
import type { Server, Socket } from 'socket.io';
export interface Notification {
    id: string;
    title: string;
    body: string;
    timestamp: number;
}
export declare class NotificationsGateway implements OnGatewayConnection {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    server: Server;
    handleConnection(client: Socket): void;
    broadcast(notification: Notification): void;
}
