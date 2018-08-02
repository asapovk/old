import React, { Component } from 'react';

interface ValidateObject {
    error?: string,
    regex: RegExp,
    isMatch?: boolean
}
interface TextFieldProps {
    label?: string,
    validate?: Array<ValidateObject>
    defaultValue?: string,
    value?: string,
    style?: React.CSSProperties,
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
}

class TextField extends Component<TextFieldProps> {

    state = {
        className: "ui-textfield"
    }
    public validate(value: string): boolean {
        const errors: string[] = [];

        const { validate, onError } = this.props;

        if (validate) {
            validate.forEach(item => {
                if (item.regex.test(value) === Boolean(item.isMatch)) {
                    this.setState({
                        classes: `ui-textfield ui-textfield-error`,
                        isValid: false
                    });
                    errors.push(item.error || `Значение "${value}" не соответсвует регулярному выражению ${item.regex}`);
                }
            });
            onError && onError(errors.length > 0 ? errors : null)
        }

        return (errors.length === 0);
    }

    render() {
        const { label, value, defaultValue, style, onChange } = this.props;
        const { className } = this.state;

        return (
            <div className={className} style={style}>
                <div className='ui-textfield-label'>{label}</div>
                <input
                    defaultValue={defaultValue}
                    value={value}
                    onChange={(event) => {
                        if (this.validate(event.currentTarget.value)) {
                            onChange && onChange(event.currentTarget.value);
                        }
                    }}
                    onClick={event => this.validate(event.currentTarget.value)}
                />
            </div>
        )
    }
}

export default TextField;