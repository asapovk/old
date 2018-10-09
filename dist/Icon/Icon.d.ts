import React, { CSSProperties } from 'react';
export declare type IconType = 'add' | 'more' | 'pin' | 'close' | 'search' | 'right' | 'left' | 'down' | 'up' | 'check' | 'sync' | 'filter' | 'settings' | 'chart' | 'calendar' | 'spin' | 'smorodina';
export declare const svgIconPath: Record<IconType, string>;
interface Props {
    style?: CSSProperties;
    className?: string;
    type: IconType;
}
declare class Icon extends React.Component<Props> {
    render(): JSX.Element;
}
export default Icon;
