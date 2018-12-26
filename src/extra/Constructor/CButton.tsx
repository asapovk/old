import React from 'react';
import Component from './Prototype';
import { Button } from '../../';

export default class CButton extends Component {

    static defaultProps = {
        onAction: _ => { return true; }
    }

    render() {
        if (!this.isVisible()) return null;

        const props = {
            style: this.getProperty("style", {}),
            outline: this.getProperty("outline"),
            labelCase: this.getProperty("labelCase"),
            label: this.getProperty("label", ""),
            decoration: this.getProperty("decoration"),
            icon: this.getProperty("icon"),
            loading: this.state.saving,
            onClick: (e) => {
                this.setSaving(true);
                this.props.onAction(this.props.object, onSuccess => {
                    this.setSaving(false);
                });
            }
        }
        return <Button {...props} />;
    }
}