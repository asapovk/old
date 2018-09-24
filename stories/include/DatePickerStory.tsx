import React from 'react';
import { Flexbox, DatePicker } from '../../src';
import moment from 'moment';

class DatePickerStory extends React.Component {

    render() {
        return (
            <Flexbox pr={40} pl={40} pb={40}>
                <DatePicker minValue={moment().add(-30, "days")} maxValue={moment().add(30, "days")} />
            </Flexbox>
        )
    }
}

export default DatePickerStory