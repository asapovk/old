/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { forwardRef } from 'react';
import { Flexbox, HR } from '..';
import Types from './types';
import React, { useState } from 'react';

export default forwardRef((props: Types.DecoratorProps, ref) => {

    let Content = <Header {...props} />

    if (props.menu) {
        Content = <HeadersMenu {...props} />
    }

    if (props.action) {
        Content = (
            <Flexbox alignItems='baseline' justifyContent='space-between'>
                {Content}
                <div>{props.action}</div>
            </Flexbox>
        )
    }

    return (
        <Flexbox flexDirection='column' {...props}>
            {Content}
            <HR css={css({
                marginTop: props.typography.marginBottom &&
                    '-' + props.typography.marginBottom
            })} />
        </Flexbox>
    )
})

const Header = (props) => jsx(
    props.tag,
    {
        className: props.className,
        onClick: props.onClick,
        css: css(
            {
                ...props.typography,
                display: props.type === 'caption' ? 'inline-block' : 'block',
                lineHeight: props.typography.fontSize,
                marginRight: props.mr,
                paddingBottom: '0.625rem',
            },
            props.color && {
                color: props.theme[props.color].rgb
            },
            props.menu && {
                cursor: 'pointer'
            }
        ),
    },
    props.children
);

const HeadersMenu = (props) => {

    const [value, setValue] = useState<string>(props.value
        ? props.value
        : props.menu[0].value
    );

    const onChange = (value) => {
        setValue(value);
        props.onChange && props.onChange(value)
    }

    return (
        <Flexbox>
            {props.menu.map(item => (
                <Header {...{
                    ...props,
                    ...{
                        children: item.text,
                        onClick: () => onChange(item.value),
                        mr: '1.5rem',
                        key: item.value,
                        css: value === item.value
                            ? css({
                                color: props.theme.text.rgb,
                                borderBottom: `3px solid ${props.theme.highlight.rgb}`
                            })
                            : css({ color: props.theme.lowlight.rgb })
                    }
                }} />
            ))}
        </Flexbox>
    )
}