import React from 'react';
import { Flexbox, DatePicker, Title } from '../../../src';
import moment from 'moment';
import '../../../src/Styles/scss/main.scss';

class DatePickerStory extends React.Component {
    render() {
        return (
            <Flexbox p={40}>
                <Flexbox flexDirection='column' pr={40}>
                    <Title>DatePicker (TextField)</Title>
                    <Flexbox pt={20}>
                        <DatePicker minValue={moment().add(-30, "days")} maxValue={moment().add(30, "days")} label="Выберите дату" />
                    </Flexbox>
                </Flexbox>
                <Flexbox flexDirection='column' pr={40}>
                    <Title>DatePicker (Display)</Title>
                    <Flexbox pt={20}>
                        <DatePicker type='display' />
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        )
    }
}

export default DatePickerStory