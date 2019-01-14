declare namespace PopupTypes {
    interface TargetCoordinates {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
    type Position = 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right' | 'top-center' | 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom';
    interface Props {
        type?: 'error';
        position?: Position;
        trigger?: any;
        triggerRef?: any;
        on?: 'hover' | 'click';
        children?: any;
        visible?: boolean;
        onClose?: () => void;
    }
}
export default PopupTypes;
