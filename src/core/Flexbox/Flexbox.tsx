/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { CSSProperties } from 'react';

export interface FlexboxProps {
    onClick?: (event: any) => void
    onMouseEnter?: (event: any) => void
    onMouseLeave?: (event: any) => void
    onMouseDown?: (event: any) => void
    onMouseUp?: (event: any) => void
    onTouchStart?: (event: any) => void
    onTouchEnd?: (event: any) => void
    elementRef?: any
    style?: CSSProperties
    className?: string
    w?: number | string
    h?: number | string
    p?: number | string
    pr?: number | string
    pl?: number | string
    pt?: number | string
    pb?: number | string
    m?: number | string
    mr?: number | string
    ml?: number | string
    mt?: number | string
    mb?: number | string
    column?: boolean
    inline?: boolean
    flex?: number | string
    flexBasis?: number | string
    flexGrow?: number | string
    flexShrink?: number | string
    alignSelf?: "auto" | "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
    alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
    alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    flexFlow?: "flex-direction" | "flex-wrap"
    children?: any
    id?: any
}


class Flexbox extends React.Component<FlexboxProps> {
    render() {
        const { className, elementRef, onClick, onMouseEnter, onMouseLeave, onMouseUp, onMouseDown, onTouchStart, onTouchEnd, w, h, pr, pl, pt, pb, p, m, mr, ml, mt, mb, flex, inline, flexBasis, alignContent, alignSelf, alignItems, justifyContent, flexDirection, flexFlow, flexShrink, flexGrow, column, id } = this.props;
        const props: any = {
            className,
            ref: elementRef,
            onClick,
            onMouseEnter,
            onMouseLeave,
            onTouchStart,
            onTouchEnd,
            onMouseUp,
            onMouseDown,
            id: id,
            css: {
                position: 'relative',
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: column ? "column" : flexDirection,
                ...this.props.style
            }
        }
        if (flex) props.css.flex = flex;
        if (flexBasis) props.css.flexBasis = flexBasis;

        if (w) props.css.width = w;
        if (h) props.css.height = h;
        if (p) props.css.padding = p;
        if (pt) props.css.paddingTop = pt;
        if (pl) props.css.paddingLeft = pl;
        if (pr) props.css.paddingRight = pr;
        if (pb) props.css.paddingBottom = pb;
        if (m) props.css.margin = m;
        if (mt) props.css.marginTop = mt;
        if (ml) props.css.marginLeft = ml;
        if (mr) props.css.marginRight = mr;
        if (mb) props.css.marginBottom = mb;

        if (alignContent) props.css.alignContent = alignContent;
        if (alignSelf) props.css.alignSelf = alignSelf;
        if (alignItems) props.css.alignItems = alignItems;
        if (justifyContent) props.css.justifyContent = justifyContent;
        if (flexFlow !== undefined) props.css.flexFlow = flexFlow;
        if (flexShrink !== undefined) props.css.flexShrink = flexShrink;
        if (flexGrow !== undefined) props.css.flexGrow = flexGrow;

        return jsx('div', props, this.props.children);
    }
}

export default Flexbox;