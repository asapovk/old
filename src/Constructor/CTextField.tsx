import React from 'react';
import Component from './Prototype';
import { TextField } from '../';

export default class CTextFiled extends Component {

    static needAppend = true;
    static defaultProps = {}

    render() {
        if (!this.isVisible()) return null;

        //TODO: correct props
        const props = {
            style: this.getProperty("style", {}),
            label: this.getProperty("label", ""),
            rows: this.getProperty("rows", undefined),
            rowsMax: this.getProperty("rowsMax", undefined),
            type: this.getProperty("type", "input"),
            help: this.getProperty("help", undefined),
            defaultValue: this.getProperty("defaultValue", ''),
            disabled: this.getProperty("disabled", false),
            password: this.getProperty("password", false),
            placeholder: this.getProperty("placeholder", ''),

            [this.props.async ? "onBlur" : "onChange"]: value => this.setValue(value),

            loading: this.state.saving,
            errorText: this.state.error
        }
        return <TextField {...props} />;
    }
}

