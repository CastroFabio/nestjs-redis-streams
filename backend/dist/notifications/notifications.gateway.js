var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WebSocketGateway, WebSocketServer, } from '@nestjs/websockets';
import { NotificationsService } from './notifications.service.js';
let NotificationsGateway = class NotificationsGateway {
    notificationsService;
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    server;
    handleConnection(client) {
        console.log(`Client ${client.id} connected!`);
    }
    broadcast(notification) {
        this.server.emit('notification', notification);
    }
};
__decorate([
    WebSocketServer(),
    __metadata("design:type", Function)
], NotificationsGateway.prototype, "server", void 0);
NotificationsGateway = __decorate([
    WebSocketGateway(),
    __metadata("design:paramtypes", [NotificationsService])
], NotificationsGateway);
export { NotificationsGateway };
//# sourceMappingURL=notifications.gateway.js.map