import React from 'react';
import ModalTypes from './types';
export default class Modal extends React.Component<ModalTypes.Props> {
    portalContainer: any;
    overlay: any;
    window: any;
    state: {
        active: boolean;
        visible: boolean;
        customContent: null;
        center: boolean;
    };
    constructor(props: ModalTypes.Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setActive;
    private setVisible;
    /**
     * Open
     */
    open(customContent?: React.Component | any): void;
    close(didClose?: () => void): void;
    private setVetricalCenter;
    updateLayout(): void;
    render(): JSX.Element | null;
}
