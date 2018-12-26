
import React, { CSSProperties } from 'react';
import { Button, Styles } from '../../';
import { IconType } from '../Icon/Icon';

interface Props {
    style?: CSSProperties
    active?: boolean
    icon?: IconType
    bubble?: number
    disabled?: boolean
    mobileActive?: boolean
    onClose?: () => void
    label?: string
    backTitle?: string
}

class TabContent extends React.Component<Props> {

    render() {
        return (
            <Styles>
                {styles => (
                    <div style={styles.tabs.container} className={`ui-tabs-content${this.props.active ? " active" : ""}${this.props.mobileActive ? " mobileActive" : ""}`}>
                        {this.props.mobileActive && (
                            <div className={`ui-tabs-content-mobile-header`}>
                                <Button
                                    className={`ui-tabs-content-mobile-header-backBtn`}
                                    onClick={this.props.onClose}
                                    label={this.props.backTitle || "Назад"}
                                />
                                {this.props.label && <div className={`ui-tabs-content-mobile-header-title`}>{this.props.label}</div>}
                            </div>
                        )}
                        {this.props.children}
                    </div>
                )}
            </Styles>
        )
    }
}

export default TabContent;