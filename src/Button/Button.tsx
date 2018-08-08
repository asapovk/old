import React, { Component } from 'react';

interface ButtonProps {
    label?: string
    outline?: boolean
    color?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    case?: 'upper' | 'lower' | 'capitalize' | 'sentence'
}

class Button extends Component<ButtonProps> {
    render() {

        const classes = 'ui-button'
        return (
            <button className='ui-button'>{this.props.label}</button>
        )
    }
}

export default Button;