/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, useState } from 'react';
import { Flexbox, Icon, Spin } from '..';
import Field from './Field';
import createStyles from './styles';
import Types from './types';

export default forwardRef((props: Types.Props, ref) => {
    const [value, setValue] = useState<string>(props.value || props.defaultValue || '');
    const [focused, setFocused] = useState<boolean>(false);

    const onChange = (e, newValue) => {
        if (newValue == value) {
            return;
        }
        setValue(newValue);
        props.onChange && props.onChange(e, newValue);
    }

    const styles = createStyles({
        multiline: props.multiline,
        size: props.size,
        disabled: props.disabled || props.loading,
        decoration: props.decoration,
        floatingLabel: props.floatingLabel,
        leftIcon: props.leftIcon
    });

    return (
        <Flexbox css={styles.container} className={props.className} style={props.style} flexDirection='column'>
            {props.label && (
                <span css={styles.label} children={props.label} />
            )}
            <Flexbox css={styles.wrapper} onClick={props.onClick} alignItems='center'>
                {(props.floatingLabel && (props.size && props.size !== 'small')) && (
                    <label
                        css={styles.floatingLabel(focused || !!value)}
                        children={props.floatingLabel}
                    />
                )}
                {props.leftIcon && <Icon css={styles.icon('left')} type={props.leftIcon} />}
                <Field
                    styles={styles}
                    ref={ref}
                    multiline={props.multiline}
                    mask={props.mask}
                    onFocus={(event) => {
                        setFocused(true);
                        props.onFocus && props.onFocus(event);
                    }}
                    onBlur={(event) => {
                        setFocused(false);
                        props.onBlur && props.onBlur(event);
                    }}
                    onChange={onChange}
                    onClick={(e) => {
                        props.onClick && props.onClick(e);
                    }}
                    onEnter={props.onEnter}
                    disabled={props.disabled}
                    loading={props.loading}
                    placeholder={props.floatingLabel ? '' : props.placeholder}
                    type={props.type}
                    singlerow={props.singlerow}
                    value={value}
                    tabIndex={props.tabIndex}
                />
                {props.loading
                    ? <Spin><Icon css={styles.icon()} type='spin' /></Spin>
                    : props.rightIcon && <Icon css={styles.icon('right')} type={props.rightIcon} />}
            </Flexbox>
        </Flexbox>
    )
})