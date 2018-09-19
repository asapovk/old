import { PaginationProps } from './TablePagination';
export interface Props {
    data: any[];
    columns: {
        title?: string;
        dataIndex: string;
        width?: number;
        render?: (row: any, value: any) => any;
    }[];
    form?: {
        key: string;
        render: any;
    };
    actions?: {
        label: string;
        className?: string;
        onAction: (row: any) => void;
    }[];
    border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
    indexKey?: string;
    scope?: any;
    style?: any;
    pagination?: PaginationProps;
    noDataLabel?: string;
    children?: any;
}
export interface ThemedProps {
    theme: any;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;
