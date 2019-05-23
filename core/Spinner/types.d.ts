import { CSSProperties } from "react";
import { SizeTypes } from "../types";
declare namespace SpinnerTypes {
    interface Props {
        spinning?: boolean;
        center?: boolean;
        invert?: boolean;
        children?: any;
        style?: CSSProperties;
        className?: string;
        size?: SizeTypes;
        type?: 'default' | 'smorodina';
        loadingText?: string;
    }
}
export default SpinnerTypes;
