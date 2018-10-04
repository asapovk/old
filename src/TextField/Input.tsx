import React, { ReactElement } from 'react';
import { Flexbox, Spinner } from '../';
import { InputProps } from './TextField';

interface Props {
    style: any
    leftIcon?: ReactElement<Flexbox>
    rightIcon?: ReactElement<Flexbox>
    loading?: ReactElement<Flexbox>
}

class Input extends React.Component<Props & InputProps> {

    render() {

        const { value, defaultValue, type, leftIcon, rightIcon, disabled, style, decoration, onChange, onClick, onFocus, onBlur, loading } = this.props;

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
                {loading ? loading : rightIcon}
            </Flexbox>
        )
    }

}

export default Input

