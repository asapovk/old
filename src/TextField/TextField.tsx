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
    rightIcon?: IconType
    leftIcon?: IconType
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
    onClick?: (event: any) => void
    onFocus?: (event: any) => void
    onBlur?: (event: any) => void

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

        let rightIcon: any = null;
        let leftIcon: any = null;
        if (this.props.rightIcon) {
            rightIcon = (
                <Flexbox style={{ width: 24, height: 34, fontSize: 34, paddingRight: 5, color: this.props.theme.iconColor }}>
                    <Icon type={this.props.rightIcon} />
                </Flexbox>
            )
        }
        if (this.props.leftIcon) {
            leftIcon = (
                <Flexbox style={{ width: 24, height: 34, fontSize: 34, paddingLeft: 5, color: this.props.theme.iconColor }}>
                    <Icon type={this.props.leftIcon} />
                </Flexbox>
            )
        }
        const InputTSX = (
            <Flexbox
                onClick={this.props.onClick}
                className={(this.props.decoration == 'none' ? '' : ' ui-textfield-input')} style={{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.backgroundColor
                }}>
                {leftIcon}
                <input
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={(event) => this.onChange(event.currentTarget.value)}
                    disabled={disabled}
                    type={type}
                />
                {rightIcon}
            </Flexbox>
        )

        const TextAreaTSX = (
            <Flexbox
                onClick={this.props.onClick}
                className={(this.props.decoration == 'none' ? '' : ' ui-textfield-textarea')} style={{
                    borderColor: theme.borderColor,
                    backgroundColor: theme.backgroundColor
                }}>
                {leftIcon}
                <textarea
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
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
                {rightIcon}
            </Flexbox>
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
                labelColor: theme.lowlight.rgb,
                iconColor: theme.lowlight.rgb,
            }} />
        )}
    </Theme>
);