interface Props {
    label?: string;
    radio?: boolean;
    checked?: boolean;
    onChange?: (checked: any) => void;
    style?: any;
    defaultValue?: boolean;
    uppercase?: boolean;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
