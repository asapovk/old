/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react';
import Types from './types'
import InputMask from 'react-input-mask';

export default forwardRef((props: Types.FieldProps, ref) => {

    function onChange(event: React.FormEvent<HTMLInputElement>): void {
        props.onChange && props.onChange(event);
    }

    function onKeyPress(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            props.onEnter && props.onEnter(event);
        }
    }

    if (props.mask) {
        return jsx(
            InputMask,
            {
                mask: props.mask,
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                defaultValue: props.defaultValue,
                value: props.value,
                onChange: onChange,
                onKeyPress: onKeyPress,
                disabled: props.disabled,
                placeholder: props.placeholder,
                css: props.styles.field,
                ref: ref,
                type: props.type,
            }
        )
    }

    return jsx(
        props.multiline ? 'textarea' : 'input',
        {
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            defaultValue: props.defaultValue,
            value: props.value,
            onChange: onChange,
            onKeyPress: onKeyPress,
            disabled: props.disabled,
            placeholder: props.placeholder,
            css: props.styles.field,
            ref: ref,
            type: props.type,
            ...props.multiline
                ? props.singlerow && {
                    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                        }
                    }
                }
                : { type: props.type }
        }
    )
})