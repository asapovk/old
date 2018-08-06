import * as React from 'react';
import getStyles from './styles';

interface ValidateObject {
    error?: string,
    regex: RegExp,
    isMatch?: boolean
}
interface TextFieldProps {
    theme?: any,
    label?: string,
    validate?: Array<ValidateObject>
    defaultValue?: string,
    value?: string,
    style?: React.CSSProperties,
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
        const { label, value, defaultValue, style, onChange, theme } = this.props;
        const styles = getStyles(theme);

        return (
            <div className={styles.main} style={style}>
                <div className={styles.label}>{label}</div>
                <input
                    className={styles.input}
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

export default UITextField;