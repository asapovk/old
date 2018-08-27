import React, { CSSProperties } from 'react';

interface Props {
    onClick?: () => void
    elementRef?: any
    style?: CSSProperties
    className?: string
    w?: number,
    h?: number,
    pr?: number
    pl?: number
    pt?: number
    pb?: number
    p?: number
    column?: boolean
    flex?: number
    flexBasis?: number
    flexFrow?: number
    flexShrink?: number
    alignSelf?: "auto" | "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
    alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch"
    alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch"
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly"
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse"
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
    flexFlow?: "flex-direction" | "flex-wrap"
}


class Flexbox extends React.Component<Props> {
    render() {
        const { className, elementRef, onClick, w, h, pr, pl, pt, pb, p, flex, flexBasis, alignContent, alignSelf, alignItems, justifyContent, flexDirection, flexFlow, column } = this.props;
        const props: any = {
            className,
            ref: elementRef,
            onClick,
            style: {
                position: 'relative',
                display: 'flex',
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

        if (alignContent) props.style.alignContent = alignContent;
        if (alignSelf) props.style.alignSelf = alignSelf;
        if (alignItems) props.style.alignItems = alignItems;
        if (justifyContent) props.style.justifyContent = justifyContent;
        if (flexFlow) props.style.padding = flexFlow;

        return React.createElement('div', props, this.props.children);
    }
}

export default Flexbox;