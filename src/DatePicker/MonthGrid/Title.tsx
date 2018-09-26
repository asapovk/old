import React, { Fragment } from 'react';
import { Flexbox, Theme, Icon } from '../../';
import moment, { Moment } from 'moment';

interface Props {
    date: Moment
    disaplayWeeks?: boolean
    onChange?: (date: Moment) => void
}

export interface ThemedProps {
    theme
}

class MonthGridTitle extends React.Component<Props & ThemedProps> {
    render() {
        const { date, disaplayWeeks, onChange, theme } = this.props;

        const Next = (props) => (
            <Flexbox flexBasis={20} alignItems="center"
                onClick={() => onChange && onChange(date.clone().add(props.previous ? -1 : 1, "month"))}
                children={<Icon type={props.previous ? "left" : "right"} />}
            />
        )
        const Back = () => <Next previous />;

        return (
            <Fragment>
                <Flexbox className="ui-datepicker-monthgrid-title" style={theme.style}>
                    <Back />
                    <Flexbox column flex={1} alignItems="center" justifyContent="center">
                        <div className="ui-datepicker-monthgrid-title-month">{date.format("MMMM")}</div>
                        <div className="ui-datepicker-monthgrid-title-year">{date.format("YYYY")}</div>
                    </Flexbox>
                    <Next />
                </Flexbox>
                {disaplayWeeks && (
                    <Flexbox className="ui-datepicker-monthgrid-title-weeks">
                        {moment.weekdaysShort(true).map(day => (
                            <Flexbox
                                key={day}
                                style={theme.weekDayStyle}
                                className="ui-datepicker-monthgrid-title-weeks-day"
                                justifyContent="center"
                                alignItems="center"
                                children={day.slice(0, 2)}
                            />
                        ))}
                    </Flexbox>
                )}
            </Fragment>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <MonthGridTitle {...props} theme={{
                style: {
                    color: theme.lowlight.hex,
                    background: theme.interface.hex,
                    borderColor: theme.interface.hex,
                },
                weekDayStyle: {
                    color: theme.lowlight.hex,
                    background: theme.interface.hex,
                    borderColor: theme.interface.hex,
                }
            }} />
        )}
    </Theme>
);
