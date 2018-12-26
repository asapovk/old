import React, { CSSProperties, Fragment } from 'react';
import { Flexbox, Portal } from '../../';
import NotificationsItem from './NotificationsItem';

export interface NotificationOptions {
    title: string
    text: string
    timeout?: number
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue'
}

class Notifications extends React.Component {
    state: any = {
        notifications: []
    }
    pushNotification(options: NotificationOptions) {
        const index = this.state.notifications.length;

        this.setState({
            notifications: this.state.notifications.concat(
                <NotificationsItem options={options} onClose={() => {
                    this.setState({
                        notifications: this.state.notifications.filter((item, i) => i != index)
                    });
                }} />
            )
        });
        setTimeout(() => {
            this.setState({
                notifications: this.state.notifications.filter((item, i) => i)
            });
        }, options.timeout ? options.timeout * 1000 : 2500);
    }
    render() {
        return (
            <Portal>
                <Flexbox inline column className="ui-notifications">{
                    this.state.notifications.map((notification, index) => {
                        return (
                            <Fragment key={index}>
                                {notification}
                            </Fragment>
                        )
                    })
                }</Flexbox>
            </Portal>
        )
    }
}

export default Notifications;