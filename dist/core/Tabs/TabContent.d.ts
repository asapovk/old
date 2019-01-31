import React, { CSSProperties } from 'react';
import { IconTypes } from '../types';
interface Props {
    style?: CSSProperties;
    active?: boolean;
    icon?: IconTypes.Type;
    bubble?: number;
    disabled?: boolean;
    mobileActive?: boolean;
    onClose?: () => void;
    label?: string;
    backTitle?: string;
}
declare class TabContent extends React.Component<Props> {
    render(): JSX.Element;
}
export default TabContent;
