import { CSSProperties } from 'react';
interface SelectOption {
    text: string;
    value: string;
}
interface Props {
    search?: boolean;
    style?: CSSProperties;
    label?: string;
    disabled?: boolean;
    placeholder?: string;
    options?: SelectOption[];
    clearable?: boolean;
    multiselect?: boolean;
    defaultValue?: string | string[];
    dontClose?: boolean;
    onChange?: (value: string | string[] | null) => void;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
