import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway, WebSocketServer
} from '@nestjs/websockets';

// With ports we can create namespaces //
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
