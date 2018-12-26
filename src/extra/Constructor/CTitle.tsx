import React from 'react';
import Component from './Prototype';

export default class CTitle extends Component {
    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
        }
        return (
            <h1 {...props}>
                {this.getProperty("text", "") || this.getProperty("value", "")}
            </h1>

        );
    }
}