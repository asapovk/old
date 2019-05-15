import { SerializedStyles } from "@emotion/css";
declare namespace PopupTypes {
    interface TargetCoordinates {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
    type Position = "bottom-right";
    interface Props {
        distance?: number;
        position?: Position;
        content?: React.ReactNode;
        event?: "click";
        visible?: boolean;
        onClose?: () => void;
        className?: string;
        children?: React.ReactNode;
        wrapperStyles?: SerializedStyles;
    }
}
export default PopupTypes;
