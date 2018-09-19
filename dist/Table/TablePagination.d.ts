export interface PaginationProps {
    pageSize: number;
}
interface Props {
    pagination: PaginationProps;
    page: number;
    data: any[];
    onChange: (page: number) => void;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
