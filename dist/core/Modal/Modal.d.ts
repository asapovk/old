import React from 'react';
import ModalTypes from './types';
export default class Modal extends React.Component<ModalTypes.Props> {
    overlay: any;
    window: any;
    state: {
        visible: boolean;
        customContent: null;
        center: boolean;
    };
    constructor(props: ModalTypes.Props);
    private setVisible;
    /**
     * Open
     */
    open(customContent?: React.Component | any): void;
    close(onClose?: () => void): void;
    private setVetricalCenter;
    updateLayout(): void;
    render(): JSX.Element;
}
