import React, { Fragment } from 'react';
import Theme from '../Themes';
import { Flexbox } from '../';
import { default as Icon, IconType } from '../Icon/Icon';

interface ValidateObject {
    error?: string
    regex: RegExp
    isMatch?: boolean
}
interface Props {
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
    rightIcon?: IconType
    leftIcon?: IconType
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
    onClick?: (event: any) => void
    onFocus?: (event: any) => void
    onBlur?: (event: any) => void
    children?: any
}

class TextField extends React.Component<Props> {

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

        const rightIcon = (style) => {
            if (this.props.rightIcon) {
                return (
                    <Flexbox style={{ width: 24, height: 34, fontSize: 34, paddingRight: 5, color: style.iconColor }}>
                        <Icon type={this.props.rightIcon} />
                    </Flexbox>
                )
            } else return null
        }

        const leftIcon = (style) => {
            if (this.props.leftIcon) {
                return (
                    <Flexbox style={{ width: 24, height: 34, fontSize: 34, paddingLeft: 5, color: style.iconColor }}>
                        <Icon type={this.props.leftIcon} />
                    </Flexbox>
                )
            } else return null
        }

        const InputTSX = (style) => (
            <Flexbox
                onClick={this.props.onClick}
                className={(this.props.decoration == 'none' ? '' : ' ui-textfield-input')} style={{
                    borderColor: style.borderColor,
                    backgroundColor: style.backgroundColor
                }}>
                {leftIcon(style)}
                <input
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    defaultValue={defaultValue}
                    style={{
                        color: style.textColor
                    }}
                    value={value}
                    onChange={(event) => this.onChange(event.currentTarget.value)}
                    disabled={disabled}
                    type={type}
                />
                {rightIcon(style)}
            </Flexbox>
        )

        const TextAreaTSX = (style) => (
            <Flexbox
                onClick={this.props.onClick}
                className={(this.props.decoration == 'none' ? '' : ' ui-textfield-textarea')} style={{
                    borderColor: style.borderColor,
                    backgroundColor: style.backgroundColor
                }}>
                {leftIcon}
                <textarea
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    defaultValue={defaultValue}
                    style={{
                        color: style.textColor
                    }}
                    value={value}
                    onChange={(event) => this.onChange(event.currentTarget.value)}
                    onKeyDown={(event) => {
                        if (singlerow && event.keyCode === 13) {
                            event.preventDefault();
                        }
                    }}
                    disabled={disabled}
                />
                {rightIcon}
            </Flexbox>
        )

        return (
            <Theme>
                {styles => (
                    <div className={classes} style={style}>
                        {label && <div style={{ color: styles.textField.labelColor }} className='ui-textfield-label'>{label}</div>}
                        {multiline ? TextAreaTSX(styles.textField) : InputTSX(styles.textField)}
                    </div>
                )}
            </Theme>

        )
    }
}

export default TextField;