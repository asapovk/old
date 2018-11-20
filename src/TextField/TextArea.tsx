import React, { ReactElement } from 'react';
import { Flexbox } from '../';
import { TextAreaProps } from './TextField';

interface Props {
    style: any
    loading?: ReactElement<Flexbox>
}

class TextArea extends React.Component<Props & TextAreaProps> {

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

        const { value, defaultValue, disabled, singlerow, style, decoration, onChange, onClick, onFocus, onBlur, resize, placeholder } = this.props;

        return (
            <Flexbox
                onClick={onClick}
                className={(decoration == 'none' ? '' : ' ui-textfield-textarea')} style={style.field}>
                {(placeholder && !this.state.value) && (
                    <div className="ui-textfield-textarea-placeholder" style={style.placeholder}>{this.props.placeholder}</div>
                )}
                <textarea
                    onFocus={onFocus}
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    style={{ ...style.input, ...{ resize: resize ? 'both' : 'none' } }}
                    value={value}
                    onChange={(event) => this.onChange(event.target.value)}
                    disabled={disabled}
                    onKeyDown={(event) => {
                        if (singlerow && event.keyCode === 13) {
                            event.preventDefault();
                        }
                    }}
                />
            </Flexbox>
        )
    }

}

export default TextArea

