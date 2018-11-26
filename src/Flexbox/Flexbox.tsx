import React, { CSSProperties } from 'react';

export interface FlexboxProps {
    onClick?: (event: any) => void
    onFocus?: (event: any) => void
    onBlur?: (event: any) => void
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
}


class Flexbox extends React.Component<FlexboxProps> {
    render() {
        const { className, elementRef, onClick, w, h, pr, pl, pt, pb, p, m, mr, ml, mt, mb, flex, inline, flexBasis, alignContent, alignSelf, alignItems, justifyContent, flexDirection, flexFlow, flexShrink, flexGrow, column } = this.props;
        const props: any = {
            className,
            ref: elementRef,
            onClick,
            style: {
                position: 'relative',
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: column ? "column" : flexDirection,
                ...this.props.style
            }
        }
        if (flex) props.style.flex = flex;
        if (flexBasis) props.style.flexBasis = flexBasis;

        if (w) props.style.width = w;
        if (h) props.style.height = h;
        if (p) props.style.padding = p;
        if (pt) props.style.paddingTop = pt;
        if (pl) props.style.paddingLeft = pl;
        if (pr) props.style.paddingRight = pr;
        if (pb) props.style.paddingBottom = pb;
        if (m) props.style.margin = m;
        if (mt) props.style.marginTop = mt;
        if (ml) props.style.marginLeft = ml;
        if (mr) props.style.marginRight = mr;
        if (mb) props.style.marginBottom = mb;

        if (alignContent) props.style.alignContent = alignContent;
        if (alignSelf) props.style.alignSelf = alignSelf;
        if (alignItems) props.style.alignItems = alignItems;
        if (justifyContent) props.style.justifyContent = justifyContent;
        if (flexFlow !== undefined) props.style.flexFlow = flexFlow;
        if (flexShrink !== undefined) props.style.flexShrink = flexShrink;
        if (flexGrow !== undefined) props.style.flexGrow = flexGrow;

        return React.createElement('div', props, this.props.children);
    }
}

export default Flexbox;