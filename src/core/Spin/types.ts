import { CSSProperties } from "react";

declare namespace SpinTypes {
    export interface ISpin {
        style?: CSSProperties,
        className?: string
        children?: any
    }
}

export default SpinTypes;