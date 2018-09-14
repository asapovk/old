import React, { Component, Fragment } from 'react';
import { Spin, Icon, Flexbox } from '../index';

interface ButtonProps {
    label?: string
    loading?: boolean | string
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
    title?: string
}

class Button extends Component<ButtonProps> {
    render() {

        const { onClick, title, children, style, loading } = this.props;
        let classes = 'ui-widget';
        if (onClick) {
            classes += " ui-widget-clickable"
        }
        return (
            <Flexbox column flex={1} justifyContent="center" alignItems="center" className={classes} onClick={onClick} style={style}>
                {title ? (
                    <div className="ui-widget-title">{title}</div>
                ) : ""}
                {loading ? (
                    <Flexbox column alignItems="center" alignSelf="center" justifyContent="center">
                        <Spin>
                            <Icon type="sync" />
                        </Spin>
                        {typeof loading === "string" && <div className="ui-widget-loadingtext">loading</div>}
                    </Flexbox>
                ) : children}
            </Flexbox>
        );
    }
}

export default Button;