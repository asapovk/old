import React, { Fragment } from 'react';
import { Modal, Button, Flexbox, Portal, Viewport, Theme, utils } from '../';

export interface NotificationOptions {
    title: string
    text: string
}

class Notifications extends React.Component {
    state: any = {
        notifications: []
    }
    pushNotification(options: NotificationOptions) {
        this.setState({
            notifications: this.state.notifications.concat(
                <Theme>
                    {styles => (
                        <div style={{
                            color: styles.theme.text.hex
                        }}>
                            <div>{options.title}</div>
                            <div>{options.text}</div>
                        </div>
                    )}
                </Theme>
            )
        })
    }
    render() {
        return (
            <Portal>
                <Flexbox inline column className="ui-notifications">{
                    this.state.notifications.map((notification, index) => {
                        return (
                            <Flexbox className={"ui-notifications-item"} key={index}>{notification}</Flexbox>
                        )
                    })
                }</Flexbox>
            </Portal>
        )
    }
}
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