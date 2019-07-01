import { CSSProperties } from "react";
declare namespace ModalTypes {
    interface Props {
        title?: string;
        subtitle?: string;
        /**
         * @deprecated
         */
        loading?: boolean;
        /**
         * @deprecated
         */
        center?: boolean;
        fullSize?: boolean;
        style?: CSSProperties;
        className?: string;
        children?: any;
        hideHeader?: boolean;
        onClose?: () => void;
        didClose?: () => void;
        onOpen?: () => void;
        didOpen?: () => void;
    }
    interface StyleProps {
        visible: boolean;
        center: boolean;
        fullSize?: boolean;
    }
    interface ModalOverlayProps {
        visible: boolean;
        center: boolean;
        fullSize?: boolean;
        children?: any;
    }
    interface ModalWindowProps {
        title?: string;
        subtitle?: string;
        visible: boolean;
        center: boolean;
        fullSize?: boolean;
        hideHeader?: boolean;
        children?: any;
        className?: string;
        onClosePressed: () => void;
    }
    interface ModalHeaderProps {
        title?: string;
        subtitle?: string;
        hideHeader?: boolean;
        onClosePressed: () => void;
    }
}
export default ModalTypes;
