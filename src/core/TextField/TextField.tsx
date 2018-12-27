import React from 'react';
import { Flexbox, Spin, Styles } from '../../';
import { default as Icon, IconType } from '../Icon/Icon';
import Input from './Input';
import TextArea from './TextArea';

export type TextFieldType = 'password' | 'number';

interface ValidateObject {
    error?: string
    regex: RegExp
    isMatch?: boolean
}

export interface InputProps {
    decoration?: 'none'
    disabled?: boolean
    type?: TextFieldType
    onError?: (error: string[] | null) => void
    onChange?: (value: string) => void
    onClick?: (event: any) => void
    onFocus?: (event: any) => void
    onBlur?: (event: any) => void
    defaultValue?: string
    value?: string
    placeholder?: string;
}

export interface TextAreaProps extends InputProps {
    singlerow?: true | undefined
    resize?: true | undefined
}

export interface TextFieldProps extends TextAreaProps {
    label?: string
    validate?: Array<ValidateObject>
    multiline?: boolean
    hintIcon?: IconType
    hint?: string
    style?: React.CSSProperties
    rightIcon?: IconType
    leftIcon?: IconType
    validateTimeout?: number
    loading?: true | undefined
}

class TextField extends React.Component<TextFieldProps> {

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

    public onChange = (value: string) => {
        if (typeof this.props.validate != 'undefined') {
            let validateResult;
            setTimeout(() => validateResult = this.validate(value), this.props.validateTimeout ? this.props.validateTimeout : 0);
            if (validateResult) {
                this.props.onChange && this.props.onChange(value);
            }
            return;
        }
        this.props.onChange && this.props.onChange(value)
    }

    render() {
        const { label, value, defaultValue, style, multiline, singlerow, disabled, type, hint, onClick, onFocus, onBlur, placeholder, leftIcon, rightIcon, hintIcon, loading, resize } = this.props;

        let classes = 'ui-textfield ';

        const IconTSX = (type: IconType, position: 'left' | 'right', color) => (
            <Flexbox
                alignItems='center'
                pr={position === 'left' ? 8 : 0}
                pl={position === 'right' ? 8 : 0}
                style={{
                    fontSize: 20,
                    color: color
                }}
            >
                <Icon type={type} />
            </Flexbox>
        )

        const LoadingTSX = (color) => (
            <Flexbox alignItems='center' pl={8} style={{ fontSize: 20, color: color }}>
                <Spin><Icon type='spin' /></Spin>
            </Flexbox>
        )

        return (
            <Styles>
                {styles => (
                    <div className={classes} style={style}>
                        {label && (
                            <div
                                style={styles.textField.label}
                                className='ui-textfield-label'
                                children={label}
                            />
                        )}

                        {multiline
                            ? (
                                <TextArea
                                    onChange={this.onChange}
                                    onClick={onClick}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    style={styles.textField.singleline}
                                    value={value}
                                    defaultValue={defaultValue}
                                    placeholder={placeholder}
                                    singlerow={singlerow}
                                    disabled={disabled}
                                    loading={LoadingTSX(styles.theme.lowlight.rgb)}
                                    resize={resize}
                                />
                            )
                            : (
                                <Input
                                    onChange={this.onChange}
                                    onClick={onClick}
                                    onFocus={onFocus}
                                    disabled={disabled}
                                    onBlur={onBlur}
                                    style={styles.textField.singleline}
                                    value={value}
                                    defaultValue={defaultValue}
                                    type={type}
                                    placeholder={placeholder}
                                    leftIcon={leftIcon && IconTSX(leftIcon, 'left', styles.theme.lowlight.rgb)}
                                    rightIcon={rightIcon && IconTSX(rightIcon, 'right', styles.theme.lowlight.rgb)}
                                    loading={loading && LoadingTSX(styles.theme.lowlight.rgb)}
                                />
                            )
                        }

                        {hint && (
                            <Flexbox alignItems='flex-start' style={styles.textField.hint} className='ui-textfield-hint'>
                                {hintIcon && (
                                    <Icon type={hintIcon} />
                                )}
                                <span>{hint}</span>
                            </Flexbox>
                        )}
                    </div>
                )}
            </Styles>

        )
    }
}

export default TextField;