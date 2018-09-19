import { CSSProperties } from 'react';
interface Props {
    loading?: boolean;
    center?: boolean;
    style?: CSSProperties;
    title?: string;
    subtitle?: string;
    wrapperReference?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
