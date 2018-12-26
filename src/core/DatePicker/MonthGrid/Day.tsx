import React from 'react';
import { Flexbox, Styles } from '../../../';
import moment, { Moment } from 'moment';

interface Props {
    active: Moment
    day: Moment
    minValue?: Moment
    maxValue?: Moment
    onClick?: () => void
}

class MonthGridDay extends React.Component<Props> {
    render() {
        const { active, day, onClick, minValue, maxValue } = this.props;

        let disabled = false;

        const setStyles = (styles) => {
            let style = styles.default;
            if (day.format("YYYYMMDD") === active.format("YYYYMMDD")) {
                style = { ...style, ...styles.active }
            }
            if (day.format("YYYYMMDD") === moment().format("YYYYMMDD")) {
                style = { ...style, ...styles.current }
            }
            if (day.format("MM") !== moment().format("MM")) {
                style = { ...style, ...styles.anotherMonth }
            }
            if (minValue && minValue > day) {
                disabled = true;
                style = { ...style, ...styles.disabledDay }
            }
            if (maxValue && maxValue < day) {
                disabled = true;
                style = { ...style, ...styles.disabledDay }
            }
            return style
        }


        return (
            <Styles>
                {styles => (
                    <Flexbox
                        justifyContent="center"
                        alignItems="center"
                        className={"ui-datepicker-monthgrid-day"}
                        onClick={() => {
                            if (!disabled) onClick && onClick()
                        }}
                        children={day.date()}
                        style={setStyles(styles.datePicker.day)}
                    />
                )}
            </Styles>

        )
    }
}

export default MonthGridDay;