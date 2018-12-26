import React from 'react';
import Component from './Prototype';

export default class CText extends Component {
    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
        }
        return (
            <span {...props}>{
                this.getProperty("text", "") || this.getProperty("value", "")
            }</span>
        );
    }
}