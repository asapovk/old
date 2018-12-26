import React, { Fragment } from 'react';
import { Viewport } from '../';
import Notifications from '../core/Notifications/Notifications';
import { NotificationOptions } from '../core/Notifications/Notifications';

export default (options: NotificationOptions) => {
    //@ts-ignore
    const viewport = document.__uiviewport as Viewport;

    if (!viewport) {
        throw ("No viewport was found, that needed for Action.notification() render");
    }

    let notifications = viewport.getActionById("notifications") as any;

    if (!notifications) {
        const extra: any = { ref: null };
        notifications = {
            component: <Notifications ref={ref => extra.ref = ref} />,
            extra
        };
        viewport.mountAction(notifications.component, "notifications", extra);
    }

    setTimeout(() => notifications.extra.ref.pushNotification(options), 1);
}