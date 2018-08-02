import React, { Component } from 'react';

interface ButtonProps {
    label?: string
}

class Button extends Component<ButtonProps> {
    render() {
        return (
            <div>{this.props.label || this.props.children}</div>
        )
    }
}

export default Button;