import React from 'react';
import Component from './Prototype';
import { Checkbox } from '../../';

export default class CTextFieldSpoiler extends Component {

    static needAppend = true;
    static defaultProps = {}

    state = {
        visible: false
    }

    changeVisible(value) {
        this.setState({
            visible: this.getProperty("invertVisible", false) ? !value : value
        });

        this.setValue(value)
    }

    render() {
        if (!this.isVisible()) return null;

        const props = {
            label: this.getProperty("label", ""),
            style: this.getProperty("style", {}),
            value: this.getProperty("invertVisible", false) ? !this.state.visible : this.state.visible,
            onChange: this.changeVisible.bind(this)
        }

        return (
            <div>
                <Checkbox {...props} />
                {this.state.visible ? this.props.children : ""}
            </div>
        );
    }
}