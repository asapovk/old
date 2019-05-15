/** @jsx jsx */
import { jsx } from '@emotion/core'
import { forwardRef, useLayoutEffect, useState, Fragment, useEffect } from 'react'
import { Flexbox, Icon, Spin } from '..'
import Field from './Field'
import createStyles from './styles'
import Types from './types'
import decimalFormat from './formats/decimal'

export default forwardRef((props: Types.Props, ref) => {
    const [value, setValue] = useState<string>('')
    const [focused, setFocused] = useState<boolean>(false)
    const decimalCount = props.decimalCount || 2;

    useEffect(() => {
        if (typeof props.value !== 'undefined') {
            setValue(props.value)
        }
    }, [props.value])

    useLayoutEffect(() => {
        let value: string | null = props.value || props.defaultValue || ''
        if (props.type === 'decimal') {
            value = decimalFormat(value, decimalCount)
            if (value === null) {
                value = '0.' + "0".repeat(decimalCount)
            }
        }
        setValue(value)
    }, [])


    const onChange = (e: any, newValue: string | any) => {
        if (props.type === 'decimal') {
            newValue = decimalFormat(newValue, decimalCount)
        }
        if (newValue !== null) {
            if (typeof props.value === 'undefined') {
                setValue(newValue)
            }
            props.onChange && props.onChange(e, newValue)
        }
    }

    const onBlur = (e: any, newValue: string) => {
        if (props.type == 'decimal') {
            newValue = parseFloat(newValue || '0').toFixed(decimalCount)

            if (value !== newValue) {
                if (typeof props.value === "undefined") {
                    setValue(newValue)
                }
                props.onChange && props.onChange(e, newValue)
            }
        }

        setFocused(false)
        props.onBlur && props.onBlur(e, newValue)
    }

    const styles = createStyles({
        multiline: props.multiline,
        size: props.size,
        disabled: props.disabled || props.loading,
        decoration: props.decoration,
        floatingLabel: props.floatingLabel,
        leftIcon: props.leftIcon
    })

    const RightGlyph = () => {
        if (props.rightLabel) {
            return <span css={styles.rightLabel} children={props.rightLabel} />
        }
        if (props.rightIcon) {
            return <Icon css={styles.icon('right')} type={props.rightIcon} />
        }
        return null
    }

    return (
        <Flexbox css={styles.container} className={props.className} style={props.style} flexDirection='column'>
            {props.label && (
                <span css={styles.label} children={props.label} />
            )}
            <Flexbox
                css={styles.wrapper}
                alignItems='center'
                onClick={props.onClick}
                onMouseDown={props.onMouseDown}
                onMouseUp={props.onMouseUp}
                children={(
                    <Fragment>
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
                                setFocused(true)
                                props.onFocus && props.onFocus(event)
                            }}
                            onBlur={onBlur}
                            onChange={onChange}
                            onClick={(e) => {
                                !focused && setFocused(true)
                                props.onClick && props.onClick(e)
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
                    </Fragment>
                )}
            />
        </Flexbox>
    )
})