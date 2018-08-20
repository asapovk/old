import React, { CSSProperties } from 'react';

interface Props {
    elementRef?: any
    style?: CSSProperties
    className?: string
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
        const { className, elementRef, pr, pl, pt, pb, p, flex, alignContent, alignSelf, alignItems, justifyContent, flexDirection, flexFlow, column } = this.props;
        const props: any = {
            className,
            ref: elementRef,
            style: {
                position: 'relative',
                display: 'flex',
                flex: 1 || flex,
                flexDirection: column ? "column" : flexDirection,
                ...this.props.style
            }
        }
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