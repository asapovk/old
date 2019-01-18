/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTypography, useTheme } from '../../hooks';
import Types from './types';
import { forwardRef } from 'react';
import { Flexbox } from '..';

const Typography = forwardRef((props: Types.Props, ref) => {

    const typography = useTypography()[props.type][props.size];
    const theme = useTheme().theme;

    const Text = jsx(
        props.tag,
        {
            ref: ref,
            className: props.className,
            onClick: props.onClick,
            css: css({
                ...typography,
            },
                props.bold && {
                    fontWeight: 'bold'
                })
        },
        props.children
    );

    if (props.underline || props.action) {
        return (
            <Flexbox flexDirection='column'>
                {props.action
                    ? <Flexbox>
                        {Text}
                        <div
                            children={props.action}
                            css={css({
                                alignSelf: 'flex-end'
                            })}
                        />
                    </Flexbox>
                    : Text
                }
                <div
                    css={css({
                        marginTop: typography.marginBottom ? '-' + typography.marginBottom : 'none',
                        paddingTop: '0.625rem',
                        width: '100%',
                        borderBottom: '0.5px solid ' + theme.pale.rgb
                    })}
                />
            </Flexbox>
        )
    } else return Text
})

/**
 * PARAGRAPH
 */

export const P = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='p' type='paragraph' ref={ref} {...props} />
})

/**
 * HEADERS
 */

export const H1 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='h1' type='header' size={1} ref={ref} {...props} />
})

export const H2 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='h2' type='header' size={2} ref={ref} {...props} />
})

export const H3 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='h3' type='header' size={3} ref={ref} {...props} />
})

export const H4 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='h4' type='header' size={4} ref={ref} {...props} />
})


/**
 * DISPLAYS
 */

export const D1 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='span' type='display' size={1} ref={ref} {...props} />
})

export const D2 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='span' type='display' size={2} ref={ref} {...props} />
})

export const D3 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='span' type='display' size={3} ref={ref} {...props} />
})

export const D4 = forwardRef((props: Types.HeadersProps, ref) => {
    return <Typography tag='span' type='display' size={4} ref={ref} {...props} />
})

/**
 * TEXTS
 */

export const T1 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='text' size={1} ref={ref} {...props} />
})

export const T2 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='text' size={2} ref={ref} {...props} />
})

export const T3 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='text' size={3} ref={ref} {...props} />
})

export const T4 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='text' size={4} ref={ref} {...props} />
})

/**
 * CAPRTIONS
 */

export const C1 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='caption' size={1} ref={ref} {...props} />
})

export const C2 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='caption' size={2} ref={ref} {...props} />
})

export const C3 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='caption' size={3} ref={ref} {...props} />
})

export const C4 = forwardRef((props: Types.TextProps, ref) => {
    return <Typography tag='span' type='caption' size={4} ref={ref} {...props} />
})