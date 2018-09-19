interface Props {
    style?: any;
    children?: any;
    defaultValue?: boolean;
    value?: boolean;
    onLabel?: string;
    offLabel?: string;
    onChange?: (state: boolean) => void;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
