import React from 'react';
import { Flexbox, Theme } from '../../';
import moment, { Moment } from 'moment';

interface Props {
    active: Moment
    day: Moment
    minValue?: Moment
    maxValue?: Moment
    onClick?: () => void
}

export interface ThemedProps {
    theme
}

class MonthGridDay extends React.Component<Props & ThemedProps> {
    render() {
        const { active, day, onClick, minValue, maxValue } = this.props;

        let style = this.props.theme.default;
        let disabled = false;

        if (day.format("YYYYMMDD") === active.format("YYYYMMDD")) {
            style = { ...style, ...this.props.theme.active }
        }
        if (day.format("YYYYMMDD") === moment().format("YYYYMMDD")) {
            style = { ...style, ...this.props.theme.current }
        }
        if (day.format("MM") !== moment().format("MM")) {
            style = { ...style, ...this.props.theme.anotherMonth }
        }
        if (minValue && minValue > day) {
            disabled = true;
            style = { ...style, ...this.props.theme.disabledDay }
        }
        if (maxValue && maxValue < day) {
            disabled = true;
            style = { ...style, ...this.props.theme.disabledDay }
        }

        return (
            <Flexbox
                justifyContent="center"
                alignItems="center"
                className={"ui-datepicker-monthgrid-day"}
                onClick={() => {
                    if (!disabled) onClick && onClick()
                }}
                children={day.date()}
                style={style}
            />
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <MonthGridDay {...props} theme={{
                default: {
                    fontSize: 14,
                    borderRadius: theme.corner,
                    background: theme.interface.hex,
                    borderColor: theme.background.hex,
                    color: theme.text.hex,
                },
                active: {
                    borderColor: theme.highlight.hex,
                },
                current: {
                    background: theme.highlight.hex,
                    color: "#ffffff"
                },
                anotherMonth: {
                    background: theme.interface.rgba(0.3),
                },
                disabledDay: {
                    opacity: 0.3
                }
            }} />
        )}
    </Theme>
);
