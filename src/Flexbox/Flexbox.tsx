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
        const props = {
            className,
            ref: elementRef,
            style: {
                display: 'flex',
                flex: 1 || flex,
                padding: p,
                paddingTop: pt,
                paddingLeft: pl,
                paddingRight: pr,
                paddingBottom: pb,
                alignContent,
                alignSelf,
                alignItems,
                justifyContent,
                flexDirection: column ? "column" : flexDirection,
                flexFlow,
                ...this.props.style
            }
        }
        return React.createElement('div', props, this.props.children);
    }
}

export default Flexbox;