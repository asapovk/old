import { CSSProperties } from "react";
declare namespace TitleTypes {
    interface Props {
        style?: CSSProperties;
        children?: any;
        defaultValue?: boolean;
        value?: boolean;
        onLabel?: string;
        offLabel?: string;
        onChange?: (state: boolean) => void;
    }
}
export default TitleTypes;
