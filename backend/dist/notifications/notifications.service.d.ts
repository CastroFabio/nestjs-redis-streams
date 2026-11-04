import { NotificationsGateway } from '../websocket/notifications.gateway.js';
export declare class NotificationsService {
    private readonly gateway;
    constructor(gateway: NotificationsGateway);
    send(input: {
        title: string;
        body: string;
    }): void;
}
