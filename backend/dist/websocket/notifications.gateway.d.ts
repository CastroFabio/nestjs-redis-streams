import { OnGatewayConnection } from '@nestjs/websockets';
import type { Server, Socket } from 'socket.io';
export interface Notification {
    id: string;
    title: string;
    body: string;
    timestamp: number;
}
export declare class NotificationsGateway implements OnGatewayConnection {
    server: Server;
    handleConnection(client: Socket): void;
    broadcast(notification: Notification): void;
}
