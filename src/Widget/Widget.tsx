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
export interface ThemedProps {
    theme
}
class Widget extends Component<Props & ThemedProps> {
    render() {

        const { onClick, title, children, style, loading } = this.props;
        let classes = 'ui-widget';
        if (onClick) {
            classes += " ui-widget-clickable"
        }
        return (
            <Flexbox column flex={1} justifyContent="center" className={classes} onClick={onClick} style={{
                ...style,
                background: this.props.theme.background,
                borderColor: this.props.theme.borderColor
            }}>
                {title ? (
                    <div className="ui-widget-title">{title}</div>
                ) : ""}
                {loading ? (
                    <Flexbox column className="ui-widget-loading" alignItems="center" alignSelf="center" justifyContent="center">
                        <Spin>
                            <Icon type="sync" style={{ color: this.props.theme.highlight }} />
                        </Spin>
                        {typeof loading === "string" && <div className="ui-widget-loadingtext" style={{ color: this.props.theme.lowlight }}>loading</div>}
                    </Flexbox>
                ) : children}
            </Flexbox>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Widget {...props} theme={{
                background: theme.interface.rgb,
                borderColor: `rgba(${theme.pale.rgb}, 1)`,
                lowlight: theme.lowlight.rgb,
                highlight: theme.highlight.rgb
            }} />
        )}
    </Theme>
);