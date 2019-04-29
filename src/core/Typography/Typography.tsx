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

    const data = props.children && props.quotes
        ? props.children.toString().replace(/"([^"]*)"/g, '«$1»')
        : props.children;

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
            onClick: !props.disabled ? props.onClick : undefined,
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
                    textAlign: props.align
                },
                (!props.accent && props.color) && {
                    color: theme[props.color].rgb
                },
                props.accent && {
                    color: theme.accents[props.accent].rgb
                },
                props.background && {
                    background: theme[props.background].rgb
                },
                props.bold && {
                    fontWeight: 'bold'
                },
                props.link && {
                    color: props.color
                        ? theme[props.color].hex
                        : theme.highlight.rgb,
                    cursor: 'pointer'
                },
                props.ellipsis && {
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                },
                (props.underline || props.action) && {
                    lineHeight: typography.fontSize
                },
                props.disabled && {
                    opacity: .5
                },
                props.onClick && {
                    cursor: 'pointer'
                },
                props.disabled && (props.onClick || props.link) && {
                    cursor: 'not-allowed !important'
                }
            ),
        },
        (props.format || props.toFixed || props.unit || props.toFixed === 0)
            ? <Formatter
                format={props.format}
                unit={props.unit}
                toFixed={props.toFixed}
                children={data}
                fractionColor={props.fractionColor}
            />
            : data
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
    const gap = props.gap || 3;
    const width = props.width || 1;
    return <div
        className={props.className}
        css={css(
            {
                width: '100%',
                borderBottomWidth: `${width}px`,
                borderBottomStyle: 'solid',
                borderBottomColor: theme[props.color ? props.color : 'pale'].rgb,
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
            props.dotted && {
                border: 'none',
                backgroundImage: `linear-gradient(to right,
                    ${theme[props.color ? props.color : 'pale'].rgb} ${width}px, 
                    ${theme.background.rgba(0)} ${width}px 
                )`,
                backgroundPosition: 'left bottom',
                backgroundSize: `${gap + width}px ${width}px`,
                backgroundRepeat: 'repeat-x',
                height: `${width}px`
            }
        )}
    />
}