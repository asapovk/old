import React, { Component } from 'react';

interface ButtonProps {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: () => any
}

class Button extends Component<ButtonProps> {
    render() {

        const { decoration, labelCase, onClick } = this.props;
        let classes = 'ui-button';

        if (decoration == 'none') classes += ' btn-strip';
        if (labelCase == 'upper') classes += ' uppercase';

        return (
            <button className={classes} onClick={onClick}>{this.props.label}</button>
        )
    }
}

export default Button;