import { CSSProperties } from 'react';
interface Props {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string;
    style?: CSSProperties;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
