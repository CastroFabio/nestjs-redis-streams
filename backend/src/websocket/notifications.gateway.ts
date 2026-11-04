import {
  OnGatewayConnection,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import type { Server, Socket } from 'socket.io';

export interface Notification {
  id: string;
  title: string;
  body: string;
  timestamp: number;
}

@WebSocketGateway()
export class NotificationsGateway implements OnGatewayConnection {
  @WebSocketServer() server!: Server;

  handleConnection(client: Socket) {
    console.log(`Client ${client.id} connected!`);
  }

  broadcast(notification: Notification) {
    this.server.emit('notification', notification);
  }
}
