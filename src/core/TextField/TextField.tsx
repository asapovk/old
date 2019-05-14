/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef, useLayoutEffect, useState } from 'react';
import { Flexbox, Icon, Spin } from '..';
import Field from './Field';
import createStyles from './styles';
import Types from './types';
import { C1 } from '../..';

export default forwardRef((props: Types.Props, ref) => {
    const [value, setValue] = useState<string>('');
    const [focused, setFocused] = useState<boolean>(false);

    useLayoutEffect(() => {
        let value = props.value || props.defaultValue || '';

        if (props.type === 'rubles' || props.type === 'counter') {
            const digits = props.type == 'rubles' ? 2 : 3;
            value = parseFloat(value || '0').toFixed(digits);
        }

        setValue(value);
    }, []);

    const valueValidation = (value: string) => {
        switch (props.type) {
            case 'rubles': {
                value = value.replace(/[\,]/g, '.');
                if (value == '.') {
                    value = '0.';
                }
                const regex = /^$|^0$|^0{1}\.([0-9]{1,2})?$|^[1-9][0-9]*\.?([0-9]{1,2})?$/g;

                return new RegExp(regex).test(value)
                    ? value
                    : false
            }
            case 'counter': {
                value = value.replace(/[\,]/g, '.');
                if (value == '.') {
                    value = '0.';
                }
                const regex = /^$|^0$|^0{1}\.([0-9]{1,2})?$|^[1-9][0-9]*\.?([0-9]{1,3})?$/g;

                return new RegExp(regex).test(value)
                    ? value
                    : false
            }
        }

        return value;
    }

    const onChange = (e, newValue) => {
        newValue = valueValidation(newValue);
        if ((typeof (newValue) === 'boolean' && !newValue) || newValue == value) return;

        setValue(newValue);
        props.onChange && props.onChange(e, newValue);
    }

    const onBlur = (e, newValue) => {
        if (props.type == 'rubles' || props.type == 'counter') {
            const digits = props.type == 'rubles' ? 2 : 3;
            newValue = parseFloat(newValue || '0').toFixed(digits);

            setValue(newValue);
            if (value !== newValue) {
                props.onChange && props.onChange(e, newValue);
            }
        }

        setFocused(false);
        props.onBlur && props.onBlur(e, newValue);
    }

    const styles = createStyles({
        multiline: props.multiline,
        size: props.size,
        disabled: props.disabled || props.loading,
        decoration: props.decoration,
        floatingLabel: props.floatingLabel,
        leftIcon: props.leftIcon
    });

    const RightGlyph = () => {
        if (props.rightLabel) {
            return <span css={styles.rightLabel} children={props.rightLabel} />
        }
        if (props.rightIcon) {
            return <Icon css={styles.icon('right')} type={props.rightIcon} />
        }
        return null;
    }

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
                    onBlur={onBlur}
                    onChange={onChange}
                    onClick={(e) => {
                        !focused && setFocused(true);
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
                    : <RightGlyph />
                }
            </Flexbox>
        </Flexbox>
    )
})