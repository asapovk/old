import React, { Component } from 'react';
import Button from './Button';
import { ThemeContext } from '../Themes';

export interface ButtonProps {
    label?: string
    outline?: boolean
    decoration?: 'none' | 'accent'
    loading?: boolean
    icon?: Component
    labelCase?: 'upper' | 'lower' | 'capitalize' | 'sentence'
    onClick?: (MouseEvent?) => any
    className?: string
    style?: any
}

class ThemedButton extends React.Component<ButtonProps> {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => <Button {...this.props} theme={{
                    btnStyle: !this.props.decoration
                        ? {
                            background: theme.interface,
                            boxShadow: '0px 2px 4px 0px ' + theme.shadow,
                            borderRadius: theme.corner,
                            color: theme.text
                        }
                        : {
                            background: 'none',
                            padding: 0,
                            color: theme.text
                        },
                }} />}
            </ThemeContext.Consumer>
        )
    }
}

export default ThemedButton;