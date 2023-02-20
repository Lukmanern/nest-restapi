import {
  //   MessageBody,
  //   SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  //   WsResponse,
} from '@nestjs/websockets';
// import { from, Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  //   @SubscribeMessage('message')
  //   handleMessage(@MessageBody() message: string): void {
  //     this.server.emit('message', message);
  //   }
}
