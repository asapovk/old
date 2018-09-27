import React, { Component, Fragment } from 'react';
import { Spin, Icon, Flexbox } from '../index';
import Theme from '../Themes';

interface Props {
    label?: string
    loading?: boolean | string
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
    title?: string
    children?: any
}

class Widget extends Component<Props> {
    render() {

        const { onClick, title, children, style, loading } = this.props;
        let classes = 'ui-widget';
        if (onClick) {
            classes += " ui-widget-clickable"
        }
        return (
            <Theme>
                {styles => (
                    <Flexbox column flex={1} justifyContent="center" className={classes} onClick={onClick} style={{
                        ...style,
                        background: styles.widget.background,
                        borderColor: styles.widget.borderColor
                    }}>
                        {title ? (
                            <div className="ui-widget-title">{title}</div>
                        ) : ""}
                        {loading ? (
                            <Flexbox column className="ui-widget-loading" alignItems="center" alignSelf="center" justifyContent="center">
                                <Spin>
                                    <Icon type="sync" style={{ color: styles.widget.highlight }} />
                                </Spin>
                                {typeof loading === "string" && <div className="ui-widget-loadingtext" style={{ color: styles.widget.lowlight }}>loading</div>}
                            </Flexbox>
                        ) : children}
                    </Flexbox>
                )}
            </Theme>

        );
    }
}

export default Widget;