import React from 'react';
import Component from './Prototype';
import { Select } from '../';

export default class CSelect extends Component {

    static needAppend = true;
    static defaultProps = {}

    noRequiredParam(param) {
        console.error(`Constructor: не указан обезательный параметр ${param} для компонента selectfield!`)
    }

    render() {
        if (!this.isVisible()) return null;

        //TODO: correct props
        const props = {
            options: this.getProperty('options', []).map(item => {
                if (typeof item.value === "undefined") this.noRequiredParam("value")
                if (typeof item.text === "undefined") this.noRequiredParam("text")

                return item;
            }),
            label: this.getProperty("label", ""),
            defaultValue: this.getProperty('defaultValue'),
            allowClear: this.getProperty('allowClear', false),
            placeholder: this.getProperty('placeholder', this.getProperty('label', '')),
            style: this.getProperty("style", {}),
            loading: this.state.saving,
            errorText: this.state.error,

            onChange: value => this.setValue(value)
        }
        return <Select {...props} />;
    }
}

