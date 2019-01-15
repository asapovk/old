import { CSSProperties } from "react";

declare namespace SpinnerTypes {
    export interface ISpinner {
        spinning?: boolean,
        center?: boolean,
        dark?: boolean,
        children?: any
        style?: CSSProperties
        className?: string
    }
}

export default SpinnerTypes;