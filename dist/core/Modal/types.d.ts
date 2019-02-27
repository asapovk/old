import { CSSProperties } from "@emotion/serialize";
declare namespace ModalTypes {
    interface Props {
        title?: string;
        subtitle?: string;
        loading?: boolean;
        center?: boolean;
        style?: CSSProperties;
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
    }
    interface ModalOverlayProps {
        visible: boolean;
        center: boolean;
        children?: any;
    }
    interface ModalWindowProps {
        title?: string;
        subtitle?: string;
        visible: boolean;
        hideHeader?: boolean;
        children?: any;
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
