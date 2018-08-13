import React, { Component } from 'react';

interface ButtonProps {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => any
    className?: string
}

class Button extends Component<ButtonProps> {
    render() {

        const { decoration, labelCase, onClick, label, children, className } = this.props;
        let classes = 'ui-button';

        if (decoration == 'none') classes += ' btn-strip';
        if (labelCase == 'upper') classes += ' uppercase';
        classes += className ? ' ' + className : '';

        return (
            <button className={classes} onClick={onClick}>{label || children}</button>
        )
    }
}

export default Button;