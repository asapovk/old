import React, { ReactElement } from 'react';
import { Flexbox, Icon } from '../';
import { InputProps } from './TextField';

interface Props {
    style: any
    leftIcon?: ReactElement<any>
    rightIcon?: ReactElement<any>
}

class Input extends React.Component<Props & InputProps> {

    render() {

        const { value, defaultValue, type, leftIcon, rightIcon, disabled, style, decoration, onChange, onClick, onFocus, onBlur } = this.props;

        return (
            <Flexbox
                onClick={onClick}
                className={(decoration == 'none' ? '' : ' ui-textfield-input')} style={style.field}>
                {leftIcon}
                <input
                    onFocus={onFocus}
                    onBlur={onFocus}
                    defaultValue={defaultValue}
                    style={style.input}
                    value={value}
                    onChange={(event) => onChange && onChange(event.currentTarget.value)}
                    disabled={disabled}
                    type={type}
                />
                {rightIcon}
            </Flexbox>
        )
    }

}

export default Input

