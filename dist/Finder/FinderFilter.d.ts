interface Props {
    placeholder?: string;
    clearable?: boolean;
    onChange: (value: any, level: any) => void;
    level: number;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
