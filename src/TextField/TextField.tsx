import React from 'react';
import Theme from '../Themes';

interface ValidateObject {
    error?: string
    regex: RegExp
    isMatch?: boolean
}
interface Props {
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
    type?: 'password' | 'number'
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
    children?: any
}
export interface ThemedProps {
    theme
}
class TextField extends React.Component<Props & ThemedProps> {

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
        const { label, value, defaultValue, style, className, multiline, singlerow, disabled, type, theme } = this.props;

        let classes = 'ui-textfield ';
        if (className) classes += className;
        if (disabled) classes += 'disabled';

        const InputTSX = (
            <input
                className={'ui-textfield-reset' + (this.props.decoration == 'none' ? '' : ' ui-textfield-input')}
                defaultValue={defaultValue}
                value={value}
                onChange={(event) => this.onChange(event.currentTarget.value)}
                style={{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.backgroundColor
                }}
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
                style={{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.backgroundColor
                }}
                disabled={disabled}
            />
        )

        return (
            <div className={classes} style={style}>
                {label && <div style={{ color: theme.labelColor }} className='ui-textfield-label'>{label}</div>}
                {multiline ? TextAreaTSX : InputTSX}
            </div>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <TextField {...props} theme={{
                backgroundColor: theme.interface.rgb,
                borderColor: theme.pale.rgb,
                labelColor: theme.lowlight.rgb
            }} />
        )}
    </Theme>
);