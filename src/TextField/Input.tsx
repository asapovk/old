import React, { ReactElement } from 'react';
import { Flexbox, Spinner } from '../';
import { InputProps } from './TextField';

interface Props {
    style: any
    leftIcon?: ReactElement<Flexbox>
    rightIcon?: ReactElement<Flexbox>
    loading?: ReactElement<Flexbox>
    placeholder?: string
}

class Input extends React.Component<Props & InputProps> {

    state = {
        value: ""
    }

    onChange(value: string) {
        this.setState({ value });
        this.props.onChange && this.props.onChange(value);
    }

    componentWillMount() {
        if (this.props.value) {
            this.setState({ value: this.props.value });
        }
    }

    render() {

        const { value, defaultValue, type, leftIcon, rightIcon, disabled, style, decoration, onChange, onClick, onFocus, onBlur, loading, placeholder } = this.props;

        return (
            <Flexbox
                onClick={onClick}
                className={(decoration == 'none' ? '' : ' ui-textfield-input')} style={style.field}>
                {leftIcon}
                {(placeholder && !this.state.value) && (
                    <div className="ui-textfield-input-placeholder" style={style.placeholder}>{this.props.placeholder}</div>
                )}
                <input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    style={style.input}
                    value={value}
                    onChange={(event) => this.onChange(event.target.value)}
                    disabled={disabled}
                    type={type}
                />
                {loading ? loading : rightIcon}
            </Flexbox>
        )
    }

}

export default Input;

