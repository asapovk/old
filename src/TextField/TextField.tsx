import React from 'react';

interface ValidateObject {
    error?: string
    regex: RegExp
    isMatch?: boolean
}
interface TextFieldProps {
    theme?: any
    label?: string
    validate?: Array<ValidateObject>
    defaultValue?: string
    value?: string
    style?: React.CSSProperties
    className?: any
    multiline?: boolean
    singlerow?: boolean
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
}

class UITextField extends React.Component<TextFieldProps> {

    public validate(value: string): boolean {
        const errors: string[] = [];

        const { validate, onError } = this.props;

        if (validate) {
            validate.forEach(item => {
                if (item.regex.test(value) === Boolean(item.isMatch)) {
                    this.setState({
                        classes: 'ui-textfield ui-textfield-error',
                        isValid: false
                    });
                    errors.push(item.error || `Значение '${value}' не соответсвует регулярному выражению ${item.regex}`);
                }
            });
            onError && onError(errors.length > 0 ? errors : null)
        }

        return (errors.length === 0);
    }

    render() {
        const { label, value, defaultValue, style, onChange, className, multiline, singlerow } = this.props;

        const InputTSX = (
            <input
                className='ui-textfield-reset ui-textfield-input'
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => {
                    if (this.validate(event.currentTarget.value)) {
                        onChange && onChange(event.currentTarget.value);
                    }
                }}
                onClick={event => this.validate(event.currentTarget.value)}
            />
        )

        const TextAreaTSX = (
            <textarea
                className='ui-textfield-reset ui-textfield-textarea'
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => {
                    if (this.validate(event.currentTarget.value)) {
                        onChange && onChange(event.currentTarget.value);
                    }
                }}
                onKeyDown={(event) => {
                    if (singlerow && event.keyCode === 13) {
                        event.preventDefault();
                    }
                }}
                onClick={event => this.validate(event.currentTarget.value)}
            />
        )

        return (
            <div className={'ui-textfield' + (className ? ' ' + className : '')} style={style}>
                {label && <div className='ui-textfield-label'>{label}</div>}
                {multiline ? TextAreaTSX : InputTSX}
            </div>
        )
    }
}

export default UITextField;