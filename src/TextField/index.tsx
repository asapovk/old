import React, { Component } from 'react';

interface TextFieldProps {
    label?: string
}

class TextField extends Component<TextFieldProps> {
    render() {
        return (
            <input />
        )
    }
}

export default TextField;