import { ReactNode, CSSProperties } from 'react';
export interface IProps {
    children?: ReactNode;
    horizontal?: boolean;
    style?: CSSProperties;
    customCss?: any;
    width?: number;
    height?: number;
    displayScroll?: boolean;
}
declare const _default: (props: IProps) => JSX.Element;
export default _default;
