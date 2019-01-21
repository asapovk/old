/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTypography, useTheme } from '../../hooks';
import Types from './types';
import { forwardRef } from 'react';
import { Flexbox } from '..';

const Format = (props) => {
    let float, integer, fraction, unit

    if (typeof props.children === 'string') {
        float = parseFloat(props.children.replace(',', '.'));
    } else if (typeof props.children === 'number') {
        float = props.children
    } else return props.children

    float = float.toString().split('.');
    integer = parseInt(float[0]);
    fraction = parseInt(float[1]);

    switch (props.format) {
        case 'rub':
            unit = '₽'
            break;
        case 'volume':
            unit = ['м', <sup key={1}>{'3'}</sup>]
    }

    return (
        <span>
            {integer + ','}
            <span css={css({ fontSize: '0.75em', opacity: .5 })}>{fraction + ' '}{unit}</span>
        </span>
    )
}

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
                display: 'inline-block'
            },
                props.bold && {
                    fontWeight: 'bold'
                },
                props.link && {
                    color: theme.highlight.rgb
                })
        },
        props.format
            ? <Format format={props.format}>{props.children}</Format>
            : props.children
    );

    if (props.underline || props.action) {
        return (
            <Flexbox flexDirection='column'>
                {props.action
                    ? <Flexbox alignItems='center' justifyContent='space-between'>
                        {Text}
                        <div>{props.action}</div>
                    </Flexbox>
                    : Text
                }
                <HR css={css({ paddingTop: '0.625rem', marginTop: typography.marginBottom && '-' + typography.marginBottom })} />
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
 * CAPTIONS
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

/**
 * OTHER
 */

export const HR = (props) => {
    const theme = useTheme().theme;
    return <div
        className={props.className}
        css={css({
            height: '1px',
            width: '100%',
            borderBottom: '0.5px solid ' + theme.pale.rgb
        })}
    />
}