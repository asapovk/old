/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useTypography, useTheme } from '../../hooks';
import Types from './types';
import { forwardRef } from 'react';
import Formatter from './Formatter';
import Decorator from './Decorator';

const Typography = forwardRef((props: Types.Props, ref) => {

    const typography = useTypography()[props.type][props.size];
    const theme = useTheme().theme;

    if (props.underline || props.action || props.menu) {
        return (
            <Decorator
                {...props}
                typography={typography}
                theme={theme}
            />
        )
    } else return jsx(
        props.tag,
        {
            ref: ref,
            className: props.className,
            onClick: props.onClick,
            css: css(
                {
                    ...typography,
                    display: props.type === 'caption' ? 'inline-block' : 'block',
                    padding: props.p,
                    paddingTop: props.pt,
                    paddingLeft: props.pl,
                    paddingRight: props.pr,
                    paddingBottom: props.pb,
                    margin: props.m,
                    marginTop: props.mt,
                    marginLeft: props.ml,
                    marginRight: props.mr,
                    marginBottom: props.mb,
                },
                props.color && {
                    color: theme[props.color].rgb
                },
                props.bold && {
                    fontWeight: 'bold'
                },
                props.link && {
                    color: theme.highlight.rgb,
                    cursor: 'pointer'
                },
                (props.underline || props.action) && {
                    lineHeight: typography.fontSize
                }
            ),
        },
        props.format
            ? <Formatter
                format={props.format}
                children={props.children}
            />
            : props.children
    );
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

export const HR = (props: Types.HRProps) => {
    const theme = useTheme().theme;
    return <div
        className={props.className}
        css={css({
            height: '1px',
            width: '100%',
            borderBottomWidth: props.bold ? '4px' : '0.5px',
            borderBottomStyle: props.dotted ? 'dotted' : 'solid',
            borderBottomColor: theme[props.color ? props.color : 'pale'].rgb
        })}
    />
}