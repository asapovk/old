/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, Fragment } from 'react';
import Types from './types'
import InputMask from 'react-input-mask';

export default forwardRef((props: Types.FieldProps, ref) => {

    function onKeyPress(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            props.onEnter && props.onEnter(event);
        }
    }

    function _formatReturnValue(e, type, callback) {
        let value = e.currentTarget.value || '';
        callback(e, value);
    }

    function onBlur(event: React.FormEvent<HTMLInputElement>): void {
        props.onBlur && props.onBlur(event);
    }

    if (props.mask) {
        return jsx(
            InputMask,
            {
                mask: props.mask,
                onFocus: props.onFocus,
                onBlur: onBlur,
                // defaultValue: props.defaultValue,
                value: props.value,
                onChange: props.onChange,
                onKeyPress: onKeyPress,
                disabled: props.disabled,
                placeholder: props.placeholder,
                css: props.styles.field,
                ref: ref,
                type: props.type,
            }
        )
    }


    return (
        jsx(
            props.multiline
                ? 'textarea'
                : 'input',
            {
                onFocus: props.onFocus,
                onBlur: onBlur,
                // defaultValue: props.defaultValue,
                value: props.value,
                onChange: (e) => props.onChange && props.onChange(e, e.currentTarget.value),
                onKeyPress: onKeyPress,
                disabled: props.disabled,
                placeholder: props.placeholder || " ",
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
    )
})