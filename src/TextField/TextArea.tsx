import React, { ReactElement } from 'react';
import { Flexbox, Icon } from '../';
import { TextAreaProps } from './TextField';

interface Props {
    style: any
}

class TextArea extends React.Component<Props & TextAreaProps> {

    render() {

        const { value, defaultValue, disabled, singlerow, style, decoration, onChange, onClick, onFocus, onBlur } = this.props;

        return (
            <Flexbox
                onClick={onClick}
                className={(decoration == 'none' ? '' : ' ui-textfield-textarea')} style={style.field}>
                <textarea
                    onFocus={onFocus}
                    onBlur={onFocus}
                    defaultValue={defaultValue}
                    style={style.input}
                    value={value}
                    onChange={(event) => onChange && onChange(event.currentTarget.value)}
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

