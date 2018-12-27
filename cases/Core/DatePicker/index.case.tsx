import React from 'react';
import { Flexbox, DatePicker, Viewport } from '../../../src';
import moment from 'moment';
import '../../../src/Styles/scss/main.scss';

class DatePickerStory extends React.Component {

    render() {
        return (
            
                <Flexbox pr={40} pl={40} pb={40}>
                    <DatePicker minValue={moment().add(-30, "days")} maxValue={moment().add(30, "days")} label="Выберите дату" />
                </Flexbox>
            
        )
    }
}

export default DatePickerStory