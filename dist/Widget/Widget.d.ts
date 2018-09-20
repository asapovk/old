interface Props {
    label?: string;
    loading?: boolean | string;
    onClick?: (MouseEvent?: any) => any;
    className?: string;
    style?: any;
    title?: string;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
