import React from 'react';
import moment, { Moment } from 'moment';
export interface DatePickerProps {
    format?: string;
    value?: Moment | string;
    minValue?: Moment;
    maxValue?: Moment;
    label?: string;
    onChange?: (date: Moment | string) => void;
}
declare class DatePicker extends React.Component<DatePickerProps> {
    state: {
        active: boolean;
        value: moment.Moment;
        format: string;
    };
    componentWillMount(): void;
    render(): JSX.Element;
}
export default DatePicker;
