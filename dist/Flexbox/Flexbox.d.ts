import React, { CSSProperties } from 'react';
interface Props {
    onClick?: (event: any) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
    elementRef?: any;
    style?: CSSProperties;
    className?: string;
    w?: number | string;
    h?: number | string;
    p?: number | string;
    pr?: number | string;
    pl?: number | string;
    pt?: number | string;
    pb?: number | string;
    m?: number | string;
    mr?: number | string;
    ml?: number | string;
    mt?: number | string;
    mb?: number | string;
    column?: boolean;
    inline?: boolean;
    flex?: number | string;
    flexBasis?: number | string;
    flexFrow?: number | string;
    flexShrink?: number | string;
    alignSelf?: "auto" | "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
    alignItems?: "center" | "flex-start" | "flex-end" | "baseline" | "stretch";
    alignContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "stretch";
    justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    flexFlow?: "flex-direction" | "flex-wrap";
    children?: any;
}
declare class Flexbox extends React.Component<Props> {
    render(): React.DetailedReactHTMLElement<any, HTMLElement>;
}
export default Flexbox;
