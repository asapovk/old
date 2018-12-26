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
        this.setState({ value: this.props.value || this.props.defaultValue || "" });
    }

    render() {

        const { value, defaultValue, type, leftIcon, rightIcon, disabled, style, decoration, onClick, onFocus, onBlur, loading, placeholder } = this.props;

        let classes = "ui-textfield-input";
        if (disabled) classes += " disabled";

        return (
            <Flexbox
                onClick={onClick}
                style={style.field}
                className={(decoration == 'none' ? '' : classes)}
            >
                {leftIcon}
                <Flexbox flex={1}>
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
                </Flexbox>
                {loading ? loading : rightIcon}
            </Flexbox>
        )
    }

}

export default Input;

