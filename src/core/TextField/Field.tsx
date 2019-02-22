/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react';
import Types from './types'

export default forwardRef((props: Types.FieldProps, ref) => {

    function onChange(event: React.FormEvent<HTMLInputElement>): void {
        props.onChange && props.onChange(event);
    }

    return jsx(
        props.multiline ? 'textarea' : 'input',
        {
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            defaultValue: props.defaultValue,
            value: props.value,
            onChange: onChange,
            onEnter: props.onEnter,
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