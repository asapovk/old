import React, { Component, Fragment } from 'react';
import { Spin, Icon, Flexbox, Styles } from '../../';

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
            <Styles>
                {styles => (
                    <Flexbox column flex={1} justifyContent="flex-start" className={classes} onClick={onClick} style={{
                        ...style,
                        background: styles.widget.background,
                        borderRadius: styles.widget.borderRadius,
                        borderColor: styles.widget.borderColor,
                        borderWidth: styles.widget.borderWidth,
                        borderStyle: styles.widget.borderStyle
                    }}>
                        {title ? (
                            <Flexbox pr={10} flex={1} className="ui-widget-title">{title}</Flexbox>
                        ) : ""}
                        {loading ? (
                            <Flexbox column className="ui-widget-loading" alignItems="center" alignSelf="center" justifyContent="center">
                                <Spin>
                                    <Icon type="sync" style={{ color: styles.widget.highlight, fontSize: '1.5 rem' }} />
                                </Spin>
                                {typeof loading === "string" && <div className="ui-widget-loadingtext" style={{ color: styles.widget.lowlight }}>loading</div>}
                            </Flexbox>
                        ) : children}
                    </Flexbox>
                )}
            </Styles>

        );
    }
}

export default Widget;