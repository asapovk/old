import React, { Component, Fragment, Children } from 'react';
import { Widget, Icon, Button, Flexbox } from '../index';
import Theme from '../Themes';

interface Props {
    loading?: boolean | string
    className?: string
    style?: any
    children?: any
    onClick?: (MouseEvent?) => any
    actionTitle?: string
    title: string
    subtitle: string
    subtitle2: string
    value1: string
    value2: string
}
export interface ThemedProps {
    theme
}
class WidgetStat extends Component<Props & ThemedProps> {

    render() {

        const { children, onClick, actionTitle, loading, style, title, subtitle, subtitle2, value1, value2 } = this.props;
        let classes = 'ui-widgetstat';

        return (
            <Widget loading={loading} style={style}>
                <Flexbox column className={classes}>
                    <Flexbox flex={1}>
                        <Flexbox pr={10} flex={1} className="ui-widgetstat-title">{title}</Flexbox>
                        <Flexbox className="ui-widgetstat-value2"><Icon type="chart" />{value2}</Flexbox>
                    </Flexbox>
                    <Flexbox pt={5}>
                        <Flexbox pr={10} flex={1} className="ui-widgetstat-subtitle">{subtitle}</Flexbox>
                        <Flexbox className="ui-widgetstat-subtitle2">{subtitle2}</Flexbox>
                    </Flexbox>
                    <Flexbox pt={10} alignItems="center">
                        <Flexbox pr={10} flex={1} className="ui-widgetstat-value1">{value1}</Flexbox>
                        {typeof onClick === "function" ? <Button decoration="none" className="ui-widgetstat-button" onClick={onClick}>{actionTitle || "Подробнее"}</Button> : null}
                    </Flexbox>
                </Flexbox>
                {typeof children !== "undefined" ? (
                    <Flexbox flex={1} flexDirection='column' className="ui-widgetstat-extra">{children}</Flexbox>
                ) : null}
            </Widget>
        );
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <WidgetStat {...props} theme={{

            }} />
        )}
    </Theme>
);