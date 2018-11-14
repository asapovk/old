import React, { CSSProperties } from 'react';
interface Props {
    onClose?: () => void;
    didClose?: () => void;
    onOpen?: () => void;
    didOpen?: () => void;
    loading?: boolean;
    center?: boolean;
    style?: CSSProperties;
    title?: string;
    subtitle?: string;
    children?: any;
}
interface Modal {
    visible: boolean;
    view: any;
    modal: any;
}
declare class Modal extends React.Component<Props> {
    static defaultProps: {
        onClose: (_: any) => void;
        didClose: (_: any) => void;
        onOpen: (_: any) => void;
        didOpen: (_: any) => void;
    };
    state: {
        active: boolean;
        visible: boolean;
        hidding: boolean;
        center: boolean;
        loading: boolean;
        style: null;
    };
    constructor(props: any);
    private setActive;
    private setBodyScroll;
    private setVetricalCenter;
    updateLayout(): void;
    open(): void;
    close(_cb?: any): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export default Modal;
