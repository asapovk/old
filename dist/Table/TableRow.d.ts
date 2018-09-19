interface Props {
    row: {
        [dataIndex: string]: string;
    };
    columns: any;
    isSelected?: boolean;
    isExpanding?: boolean;
    isBlur?: boolean;
    actions?: any;
    border?: any;
    scope?: any;
    form?: any;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
