import React from 'react';
import { Flexbox, Theme } from '../../';
import moment, { Moment } from 'moment';

interface Props {
    active: Moment
    day: Moment
    onClick?: () => void
}

export interface ThemedProps {
    theme
}

class MonthGridDay extends React.Component<Props & ThemedProps> {
    render() {
        const { active, day, onClick } = this.props;

        let style = this.props.theme.default;

        if (day.format("YYYYMMDD") === active.format("YYYYMMDD")) {
            style = { ...style, ...this.props.theme.active }
        }
        if (day.format("YYYYMMDD") === moment().format("YYYYMMDD")) {
            style = { ...style, ...this.props.theme.current }
        }
        if (day.format("MM") !== moment().format("MM")) {
            style = { ...style, ...this.props.theme.anotherMonth }
        }

        return (
            <Flexbox
                justifyContent="center"
                alignItems="center"
                className={"ui-datepicker-monthgrid-day"}
                onClick={onClick}
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
                }
            }} />
        )}
    </Theme>
);
