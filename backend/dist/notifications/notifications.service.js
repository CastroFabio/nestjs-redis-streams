var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { NotificationsGateway, } from '../websocket/notifications.gateway.js';
import { randomUUID } from 'crypto';
let NotificationsService = class NotificationsService {
    gateway;
    constructor(gateway) {
        this.gateway = gateway;
    }
    send(input) {
        const notification = {
            id: randomUUID(),
            title: input.title,
            body: input.body,
            timestamp: Date.now(),
        };
        this.gateway.broadcast(notification);
    }
};
NotificationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [NotificationsGateway])
], NotificationsService);
export { NotificationsService };
//# sourceMappingURL=notifications.service.js.map