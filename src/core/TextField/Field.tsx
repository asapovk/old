/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef } from 'react';
import Types from './types'

interface Test {
    value: string
}

export default forwardRef((props: Types.FieldProps, ref) => {

    function onChange(event) {
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
            disabled: props.disabled,
            placeholder: props.placeholder,
            css: props.styles.field,
            ref: ref,
            type: props.type,
            ...props.multiline
                ? props.singlerow && {
                    onKeyDown: (event) => {
                        if (event.keyCode === 13) {
                            event.preventDefault();
                        }
                    }
                }
                : { type: props.type }
        }
    )
})