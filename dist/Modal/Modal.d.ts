import { CSSProperties } from 'react';
interface Props {
    onClose?: () => void;
    didClose?: () => void;
    onOpen?: () => void;
    didOpen?: () => void;
    loading?: boolean;
    center?: boolean;
    style?: CSSProperties;
    title?: string;
    subtitle?: string;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
