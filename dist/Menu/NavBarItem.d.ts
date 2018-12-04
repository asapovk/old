import React from 'react';
interface INav {
    active?: boolean;
    hidden?: boolean;
    onClick?: (menuKey: number) => void;
    label: any;
    style?: React.CSSProperties;
    menuKey: number;
}
declare const _default: (props: INav) => JSX.Element;
export default _default;
