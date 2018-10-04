import React, { CSSProperties } from 'react';
import { Flexbox, Theme, Icon } from '../';
import { NotificationOptions } from './Notifications';
interface Props {
    options: NotificationOptions
    onClose: () => void
}
class NotificationsItem extends React.Component<Props> {
    render() {
        const { options, onClose } = this.props;
        return (
            <Theme>
                {styles => (
                    <div className="ui-notifications-item" style={styles.notifications.main(options.decoration)}>
                        <Flexbox>
                            <Flexbox column flex={1} alignContent="flex-start" alignItems="flex-start" justifyContent="flex-start">
                                <div className="ui-notifications-item-title">{options.title}</div>
                                <div className="ui-notifications-item-text">{options.text}</div>
                            </Flexbox>
                            <Flexbox justifyContent="center">
                                <div onClick={onClose.bind(this)}>
                                    <Icon type="close" />
                                </div>
                            </Flexbox>
                        </Flexbox>
                    </div>
                )}
            </Theme>
        )
    }
}

export default NotificationsItem