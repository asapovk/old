import React from 'react';
import Component from './Prototype';
import { Checkbox } from '../../';

export default class CCheckBox extends Component {

    static needAppend = true;
    static defaultProps = {}

    render() {
        if (!this.isVisible()) return null;

        const props = {
            label: this.getProperty("label", ""),
            radio: this.getProperty("radio", false),
            checked: this.getProperty("checked"),
            onChange: checked => this.setValue(checked),
            style: this.getProperty("style", {}),
            defaultValue: this.getProperty("defaultValue", false),
            uppercase: this.getProperty("uppercase", false),
        }

        return <Checkbox {...props} />;
    }
}