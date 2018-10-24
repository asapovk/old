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
    static defaultProps: {
        active: boolean;
        style: {};
        mobileActive: boolean;
        backTitle: string;
        label: string;
        onClose: (_: any) => void;
    };
    render(): JSX.Element;
}
export default TabContent;
