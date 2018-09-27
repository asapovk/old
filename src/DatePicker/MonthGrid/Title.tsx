import React, { Fragment } from 'react';
import { Flexbox, Theme, Icon } from '../../';
import moment, { Moment } from 'moment';

interface Props {
    date: Moment
    disaplayWeeks?: boolean
    onChange?: (date: Moment) => void
}

class MonthGridTitle extends React.Component<Props> {
    render() {
        const { date, disaplayWeeks, onChange } = this.props;

        const Next = (props) => (
            <Flexbox flexBasis={20} alignItems="center"
                onClick={() => onChange && onChange(date.clone().add(props.previous ? -1 : 1, "month"))}
                children={<Icon type={props.previous ? "left" : "right"} />}
            />
        )
        const Back = () => <Next previous />;

        return (
            <Theme>
                {styles => (
                    <Fragment>
                        <Flexbox className="ui-datepicker-monthgrid-title" style={styles.datePicker.title.style}>
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
                                        style={styles.datePicker.title.weekDayStyle}
                                        className="ui-datepicker-monthgrid-title-weeks-day"
                                        justifyContent="center"
                                        alignItems="center"
                                        children={day.slice(0, 2)}
                                    />
                                ))}
                            </Flexbox>
                        )}
                    </Fragment>
                )}
            </Theme>

        )
    }
}

export default MonthGridTitle;