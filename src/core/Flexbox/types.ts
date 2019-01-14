import { CSSProperties } from 'react';

declare namespace FlexboxTypes {
    interface Props {
        onClick?: (event: any) => void
        onMouseEnter?: (event: any) => void
        onMouseLeave?: (event: any) => void
        onMouseDown?: (event: any) => void
        onMouseUp?: (event: any) => void
        onTouchStart?: (event: any) => void
        onTouchEnd?: (event: any) => void
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
}

export default FlexboxTypes