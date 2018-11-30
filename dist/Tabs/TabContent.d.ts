import React, { CSSProperties } from 'react';
import { IconType } from '../Icon/Icon';
interface Props {
    style?: CSSProperties;
    active?: boolean;
    icon?: IconType;
    bubble?: number;
    disabled?: boolean;
    mobileActive?: boolean;
    onClose: () => void;
    label?: string;
    backTitle?: string;
}
declare class TabContent extends React.Component<Props> {
    render(): JSX.Element;
}
export default TabContent;
