import React from 'react';
import Component from './Prototype';
import DatePicker from '../DatePicker/DatePicker';

export default class CDatePicker extends Component {

    static defaultProps = {

    }

    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
            format: this.getProperty("format"),
            value: this.getProperty("value"),
            minValue: this.getProperty("minValue"),
            maxValue: this.getProperty("maxValue"),
            label: this.getProperty("label"),
            // locale?: string
            onChange: value => this.setValue(value),
        }

        return (
            <DatePicker {...props} />
        );
    }
}