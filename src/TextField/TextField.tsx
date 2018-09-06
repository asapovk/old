import React from 'react';

enum TextFieldTypes {
    'Password' = 'password',
    'Numbers' = 'number'
}

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
    decoration?: 'none'
    disabled?: boolean
    type?: TextFieldTypes
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

    public onChange(value: string) {
        if (typeof this.props.validate != 'undefined') {
            if (this.validate(value)) {
                this.props.onChange && this.props.onChange(value);
            }
        } else this.props.onChange && this.props.onChange(value)
    }

    render() {
        const { label, value, defaultValue, style, className, multiline, singlerow, disabled, type } = this.props;

        let classes = 'ui-textfield ';
        if (className) classes += className;
        if (disabled) classes += 'disabled';

        const InputTSX = (
            <input
                className={'ui-textfield-reset' + (this.props.decoration == 'none' ? '' : ' ui-textfield-input')}
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => this.onChange(event.currentTarget.value)}
                disabled={disabled}
                type={type}
            />
        )

        const TextAreaTSX = (
            <textarea
                className={'ui-textfield-reset' + (this.props.decoration == 'none' ? '' : ' ui-textfield-textarea')}
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => this.onChange(event.currentTarget.value)}
                onKeyDown={(event) => {
                    if (singlerow && event.keyCode === 13) {
                        event.preventDefault();
                    }
                }}
                disabled={disabled}
            />
        )

        return (
            <div className={classes} style={style}>
                {label && <div className='ui-textfield-label'>{label}</div>}
                {multiline ? TextAreaTSX : InputTSX}
            </div>
        )
    }
}

export default UITextField;