import React, { useState } from 'react';
import { TextField } from '../..';
import { TextFieldTypes } from '../../core/types';

type IRublesField =
    Pick<TextFieldTypes.Props, Exclude<keyof TextFieldTypes.Props, 'value'>> & { value: number };

export default (props: IRublesField) => {
    const [value, setValue] = useState<string>((props.value / 100).toString());

    function CurrencyFormatted(amountString: string): [number, string] {
        let matchRegexp = /(\d{1,10}[\.]?[\d]?[\d]?)/g;

        const values = amountString
            .replace(/[^\d\.\,]/g, '')
            .replace(/[\,\.]{2,}/g, '.')
            .match(matchRegexp);

        if (values !== null) {
            amountString = values[0];
        } else {
            if (amountString == ".") {
                amountString = "0.";
            } else {
                amountString = '';
            }
        }

        let amountInt = parseFloat(amountString);

        if (isNaN(amountInt)) {
            amountInt = 0;
            amountString = '';
        }

        //@ts-ignore
        amountInt = parseInt((amountInt + .005) * 100);
        return [amountInt, amountString];
    }

    function onChange(event: React.FormEvent<HTMLInputElement>) {
        if (typeof props.onChange === 'function') {
            const [amountInt, amountString] = CurrencyFormatted(event.currentTarget.value);

            setValue(amountString);
            props.onChange(amountInt);
        }
    }

    function onBlur(event: React.FormEvent<HTMLInputElement>) {
        const value: string = event.currentTarget.value;
        if (value.indexOf('.') == value.length - 1) {
            setValue(value.replace('.', ''));
        }
        if (value.length === 0) {
            setValue('0');
        }
    }

    return (
        <TextField
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    )
}