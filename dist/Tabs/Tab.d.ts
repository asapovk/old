import React from 'react';
import { IconType } from '../Icon/Icon';
import { TabTypes } from './';
interface Props {
    icon?: IconType;
    active?: boolean;
    bubble?: number;
    label?: string;
    disabled?: boolean;
    index: number;
    type?: TabTypes;
    onClick: () => void;
    buttonRef: (ref: any) => void;
}
declare class Tab extends React.Component<Props> {
    static defaultProps: {
        onClick: (_: any) => void;
        buttonRef: (_: any) => void;
        icon: string;
    };
    hf: HTMLSpanElement | null;
    setBackgroundSelectedIndex(index: any, offsetLeft: any, width: any): void;
    render(): JSX.Element;
}
export default Tab;
