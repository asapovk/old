import React from 'react';
interface TargetCoordinates {
    top: number;
    bottom: number;
    left: number;
    right: number;
}
interface PopupCoordinates {
    top: number;
    left: number;
}
interface PopupProps {
    type?: 'error';
    position?: 'bottom-left' | 'bottom-right' | 'bottom-center' | 'top-left' | 'top-right' | 'top-center' | 'left-top' | 'left-middle' | 'left-bottom' | 'right-top' | 'right-middle' | 'right-bottom';
    trigger: any;
    on?: 'hover' | 'click';
}
declare class Popup extends React.Component<PopupProps> {
    state: {
        triggerCoord: TargetCoordinates;
        popupStyle: PopupCoordinates;
        content: Element | undefined;
        show: boolean;
    };
    popupRef: HTMLDivElement | null;
    triggerRef: HTMLElement | null;
    handleClickOutside: (event: any) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updatePopupCoord(): void;
    show(): void;
    hide(): void;
    render(): JSX.Element;
}
export default Popup;
