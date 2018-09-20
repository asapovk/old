interface Props {
    loading?: boolean | string;
    className?: string;
    style?: any;
    children?: any;
    onClick?: (MouseEvent?: any) => any;
    actionTitle?: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    value1: string;
    value2: string;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
