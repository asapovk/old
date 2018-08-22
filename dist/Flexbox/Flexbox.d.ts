import React, { CSSProperties } from 'react';
interface Props {
    elementRef?: any;
    style?: CSSProperties;
    className?: string;
    pr?: number;
    pl?: number;
    pt?: number;
    pb?: number;
    p?: number;
    column?: boolean;
    flex?: number | string;
    flexBasis?: number;
    flexFrow?: number;
    flexShrink?: number;
    alignSelf?: "auto" | "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
    alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
    alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch";
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flexFlow?: "flex-direction" | "flex-wrap";
}
declare class Flexbox extends React.Component<Props> {
    render(): React.DetailedReactHTMLElement<any, HTMLElement>;
}
export default Flexbox;
