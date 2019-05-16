/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Fragment } from 'react';
import InputMask from 'react-input-mask';
import Types from './types';
import { Icon } from '../Icon';

export default forwardRef((props: Types.FieldProps, ref) => {

    function onKeyPress(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            props.onEnter && props.onEnter(event);
        }
    }

    if (props.mask) {
        return jsx(
            InputMask,
            {
                onFocus: props.onFocus,
                onBlur: props.onBlur,
                onChange: props.onChange,
                // defaultValue: props.defaultValue,
                mask: props.mask,
                value: props.value,
                onKeyPress: onKeyPress,
                disabled: props.disabled || props.loading,
                placeholder: props.placeholder,
                css: props.styles.field,
                ref: ref,
                type: props.type,
                tabIndex: props.tabIndex
            }
        )
    }
    if (props._tags) {
        return (
            <div css={props.styles.field(props.multiline, true)} >
                {
                    props._tags.map((tag, index) =>
                        <div
                            key={tag + index}
                            css={props.styles.tag}
                        >
                            {tag} <Icon type='close' onClick={(e) => {
                                e.stopPropagation();
                                props._onTagClose && props._onTagClose(index);
                            }} />
                        </div>

                    )
                }
            </div>
        )
    }

    return (
        jsx(
            props.multiline
                ? 'textarea'
                : 'input',
            {
                onFocus: (e) => props.onFocus && props.onFocus(e),
                onBlur: (e) => props.onBlur && props.onBlur(e, e.currentTarget.value),
                onChange: (e) => props.onChange && props.onChange(e, e.currentTarget.value),
                // defaultValue: props.defaultValue,
                value: props.value,
                onKeyPress: onKeyPress,
                disabled: props.disabled || props.loading || props.disableEditing,
                placeholder: props.placeholder,
                css: props.styles.field(props.multiline),
                ref: ref,
                type: props.type,
                tabIndex: props.tabIndex,
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