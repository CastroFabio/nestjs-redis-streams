import { IoAdapter } from '@nestjs/platform-socket.io';
import { createAdapter } from '@socket.io/redis-streams-adapter';
import { ServerOptions, Server } from 'socket.io';
import { redis } from '../redis';

export class RedisStreamsAdapter extends IoAdapter {
  private adapterConstructor = createAdapter(redis);

  createIOServer(port: number, options?: ServerOptions): Server {
    const server: Server = super.createIOServer(port, {
      ...options,
      connectionStateRecovery: {
        maxDisconnectionDuration: 2 * 60 * 1000,
      },
    } as ServerOptions);

    server.adapter(this.adapterConstructor);
    return server;
  }
}
