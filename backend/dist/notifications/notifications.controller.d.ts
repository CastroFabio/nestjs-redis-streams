import { NotificationsService } from './notifications.service.js';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    notify(body: {
        title?: string;
        body?: string;
    }): void;
}
