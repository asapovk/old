import ButtonTypes from "../Button/types";
declare namespace NotificationTypes {
    interface Props {
    }
    interface ItemProps {
        options: Notification;
        onClose: () => void;
    }
    interface Notification {
        title: string;
        text: string;
        buttons?: ButtonTypes.Props[];
        timeout?: number;
        key?: string;
        decoration?: 'none' | 'highlight' | 'red' | 'green' | 'orange' | 'blue';
    }
    interface Ref {
        pushNotification: (options: NotificationTypes.Notification) => void;
    }
}
export default NotificationTypes;
