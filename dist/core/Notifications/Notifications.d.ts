import React from 'react';
export interface NotificationOptions {
    title: string;
    text: string;
    timeout?: number;
    decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue';
}
declare class Notifications extends React.Component {
    state: any;
    pushNotification(options: NotificationOptions): void;
    render(): JSX.Element;
}
export default Notifications;
