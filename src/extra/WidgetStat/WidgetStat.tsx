import React, { Component } from 'react';
import { Widget, Icon, Button, Flexbox, Styles } from '../../';

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

class WidgetStat extends Component<Props> {

    render() {

        const { children, onClick, actionTitle, loading, style, title, subtitle, subtitle2, value1, value2 } = this.props;
        let classes = 'ui-widgetstat';

        return (
            <Styles>
                {styles => (
                    <Widget loading={loading} style={style}>
                        <Flexbox column className={classes}>
                            <Flexbox column flex={1}>
                                <Flexbox>
                                    <Flexbox pr={10} flex={1} className="ui-widgetstat-title" style={styles.widgetStat.titleStyle}>{title}</Flexbox>
                                    <Flexbox className="ui-widgetstat-value2" style={styles.widgetStat.valueStyle}><Icon type="chart" style={{ fontSize: '1.5 rem' }} />{value2}</Flexbox>
                                </Flexbox>
                                <Flexbox pt={5}>
                                    <Flexbox pr={10} flex={1} className="ui-widgetstat-subtitle" style={styles.widgetStat.subtitleStyle}>{subtitle}</Flexbox>
                                    <Flexbox className="ui-widgetstat-subtitle2" style={styles.widgetStat.subtitleStyle}>{subtitle2}</Flexbox>
                                </Flexbox>
                            </Flexbox>

                            <Flexbox pt={10} alignItems="flex-end">
                                <Flexbox pr={10} flex={1} className="ui-widgetstat-value1" style={styles.widgetStat.valueStyle}>{value1}</Flexbox>
                                {typeof onClick === "function" ? <div className="ui-widgetstat-link" onClick={onClick}>{actionTitle || "Подробнее"}</div> : null}
                            </Flexbox>
                        </Flexbox>
                        {typeof children !== "undefined" ? (
                            <Flexbox flexDirection='column' flex={1} className="ui-widgetstat-extra" style={styles.widgetStat.extraStyle}>{children}</Flexbox>
                        ) : null}
                    </Widget>
                )}
            </Styles>

        );
    }
}

export default WidgetStat;