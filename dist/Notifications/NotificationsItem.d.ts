import React from 'react';
import { NotificationOptions } from './Notifications';
interface Props {
    options: NotificationOptions;
    onClose: () => void;
}
declare class NotificationsItem extends React.Component<Props> {
    render(): JSX.Element;
}
export default NotificationsItem;
