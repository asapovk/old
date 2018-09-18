import React from 'react';
import Button, { ButtonProps } from './Button';
import { ThemeContext } from '../Themes';

class ThemedButton extends React.Component<ButtonProps> {
    render() {
        return (
            <ThemeContext.Consumer>
                {theme => <Button {...this.props} theme={{
                    btnStyle: this.props.decoration === 'none'
                        ? {
                            background: 'none',
                            padding: 0,
                            color: theme.text
                        }
                        : {
                            background: this.props.decoration === 'accent' ? theme.highlight : theme.interface,
                            boxShadow: '0px 2px 4px 0px ' + theme.shadow,
                            borderRadius: theme.corner,
                            color: theme.text,
                            border: '1px solid ' + theme.pale
                        },
                }} />}
            </ThemeContext.Consumer>
        )
    }
}

export default ThemedButton;