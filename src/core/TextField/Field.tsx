/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, useState } from 'react';
import { FieldProps } from './types'

export default forwardRef((props: FieldProps, ref) => {

    const [value, setValue] = useState(props.value);

    function onChange(event) {
        setValue(event.target.value);
        props.onChange && props.onChange(event);
    }

    return jsx(
        props.multiline ? 'textarea' : 'input',
        {
            onFocus: props.onFocus,
            onBlur: props.onBlur,
            defaultValue: props.defaultValue,
            value: value,
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