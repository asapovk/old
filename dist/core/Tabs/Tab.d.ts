import React from 'react';
import { IconTypes } from '../types';
import { TabTypes } from './';
interface Props {
    icon?: IconTypes.Type;
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
    hf: HTMLSpanElement | null;
    setBackgroundSelectedIndex(index: any, offsetLeft: any, width: any): void;
    render(): JSX.Element;
}
export default Tab;
