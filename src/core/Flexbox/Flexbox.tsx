/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { forwardRef } from 'react';
import Types from './types';

export default forwardRef((props: Types.Props, ref) => {

    return jsx(
        'div',
        {
            className: props.className,
            onClick: props.onClick,
            onMouseEnter: props.onMouseEnter,
            onMouseLeave: props.onMouseLeave,
            onTouchStart: props.onTouchStart,
            onTouchEnd: props.onTouchEnd,
            onMouseUp: props.onMouseUp,
            onMouseDown: props.onMouseDown,
            id: props.id,
            ref: ref,
            css: {
                position: 'relative',
                display: props.inline ? 'inline-flex' : 'flex',
                flexDirection: props.column ? "column" : props.flexDirection,
                flex: props.flex,
                flexBasis: props.flexBasis,
                width: props.w,
                height: props.h,
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
                alignContent: props.alignContent,
                alignSelf: props.alignSelf,
                alignItems: props.alignItems,
                justifyContent: props.justifyContent,
                flexFlow: props.flexFlow,
                flexShrink: props.flexShrink,
                flexGrow: props.flexGrow,
                ...props.style,
            }
        },
        props.children);
})