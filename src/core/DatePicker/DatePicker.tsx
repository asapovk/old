/**
 * DatePicker.tsx
 * author: I.Trikoz
 */
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useState, useLayoutEffect, Fragment } from 'react';
import moment from 'moment';
import MonthGrid from './MonthGrid';
import DatePickerProps from './types';
import { TextField } from '../TextField';
import { Button } from '..';
import createStyles from './styles';

export default (props: DatePickerProps.Props) => {

    const [value, setValue] = useState(moment());
    const [isActive, setActive] = useState(false);

    const styles = createStyles();

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

        if (props.onChange) {
            if (props.format) {
                props.onChange(value.format(props.format));
            } else {
                props.onChange(value);
            }
        }
    }

    switch (props.type) {
        case 'display':
            return (
                <MonthGrid
                    value={value}
                    minValue={props.minValue}
                    maxValue={props.maxValue}
                    onChange={onChange}
                />)
        case 'textfield':
        default:
            return (
                <div>
                    <TextField
                        label={props.label}
                        value={value.format(props.format || "YYYY-MM-DD")}
                        onChange={e => {
                            let date = moment(e.target.value, props.format || "YYYY-MM-DD");
                            if (date.isValid()) {
                                setValue(date);
                            }
                        }}
                        onClick={() => setActive(true)}
                        rightIcon={!isActive ? "calendar" : undefined}
                    />
                    {isActive && (
                        <div css={styles.textFieldWrapper}>
                            <MonthGrid
                                value={value}
                                minValue={props.minValue}
                                maxValue={props.maxValue}
                                onChange={onChange}
                            />
                            <Button
                                onClick={() => setActive(false)}
                                size="small"
                                label="OK"
                                decoration="none"
                                css={styles.textFieldOkButton}
                            />
                        </div>
                    )}
                </div>
            )
    }
};