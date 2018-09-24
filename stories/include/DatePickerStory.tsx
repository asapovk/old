import React from 'react';
import { Flexbox, DatePicker } from '../../src';

class DatePickerStory extends React.Component {

    render() {
        return (
            <Flexbox pr={40} pl={40} pb={40}>
                <DatePicker />
            </Flexbox>
        )
    }
}

export default DatePickerStory