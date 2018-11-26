import React, { Dispatch, SetStateAction } from 'react';
interface INav {
    active?: boolean;
    onClick?: Dispatch<SetStateAction<number>>;
    label: any;
    style?: React.CSSProperties;
    itemKey: number;
}
declare const _default: (props: INav) => JSX.Element;
export default _default;
