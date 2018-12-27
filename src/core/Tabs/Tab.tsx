
import React from 'react';
import { Flexbox, Icon, Styles } from '../../';
import { IconType } from '../Icon/Icon';
import { TabTypes } from './';

interface Props {
    icon?: IconType
    active?: boolean
    bubble?: number
    label?: string
    disabled?: boolean
    index: number
    type?: TabTypes

    onClick: () => void
    buttonRef: (ref: any) => void
}

class Tab extends React.Component<Props> {

    hf: HTMLSpanElement | null

    // //Для анимации
    setBackgroundSelectedIndex(index, offsetLeft, width) {
        if (!this.hf) return;
        this.hf.style.marginLeft = offsetLeft + "px";
        this.hf.style.width = width + "px";
    }

    render() {
        const props = {
            className: `ui-tabs-tab${this.props.active ? " active" : ""}${this.props.disabled ? " disabled" : ""}`,
            onClick: () => this.props.disabled ? {} : this.props.onClick(),
            ref: this.props.buttonRef
        }
        return (
            <Styles>
                {styles => (
                    <div {...props} style={this.props.active ? styles.tabs.tabActive : styles.tabs.tab}>
                        {this.props.index === 0 && (
                            <span className="hl" ref={ref => this.hf = ref} style={styles.tabs.hl} />
                        )}
                        <Flexbox
                            className="ui-tabs-tab-container"
                            column
                            justifyContent="center"
                            alignContent="center"
                            alignItems="center"
                        >
                            {this.props.icon && <Icon type={this.props.icon} style={{ fontSize: "2.5rem" }} />}
                            {
                                this.props.bubble &&
                                <div className="ui-tabs-tab-bubble">{this.props.bubble}</div>}
                            {this.props.label}
                        </Flexbox>
                    </div>
                )}
            </Styles>
        )
    }
}

export default Tab