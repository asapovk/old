/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
import React, { useState, useLayoutEffect, Fragment } from 'react';
import moment from 'moment';
import MonthGrid from './MonthGrid';
import DatePickerProps from './types';
import { TextField } from '../TextField';

export default (props: DatePickerProps.Props) => {

    const [value, setValue] = useState(moment());
    const [isActive, setActive] = useState(false);

    useLayoutEffect(() => {
        moment.locale("ru_RU");

        if (props.value) {
            if (props.format) {
                setValue(moment(props.value, props.format));
            } else {
                if (moment.isMoment(props.value)) {
                    setValue(props.value);
                } else {
                    console.warn('DatePicker property value should be instanceof Moment, otherwise you should use format property.');
                }
            }
        }
    }, []);

    function onChange(value: moment.Moment) {
        setValue(value);
        console.log(1);
        if (props.onChange) {
            if (props.format) {
                props.onChange(value.format(props.format));
            } else {
                props.onChange(value);
            }
        }
    }

    const MonthGridView = () => (
        <MonthGrid
            value={value}
            minValue={props.minValue}
            maxValue={props.maxValue}
            onChange={onChange}
        />
    );

    switch (props.type) {
        case 'display':
            return (
                <MonthGridView />
            )
        case 'textfield':
        default:
            return (
                <div>
                    <TextField
                        value={value.format(props.format || "YYYY-MM-DD")}
                        onChange={e => {
                            let date = moment(e.target.value, props.format || "YYYY-MM-DD");
                            if (date.isValid()) {
                                setValue(date);
                            }
                        }}
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                        rightIcon="calendar"
                    />
                    {isActive && <MonthGridView />}
                </div>
            )
    }
};