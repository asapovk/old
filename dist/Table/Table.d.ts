import React from 'react';
import { PaginationProps } from './TablePagination';
export interface TableProps {
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
}
declare class Table extends React.Component<TableProps> {
    state: {
        selectedItems: string[];
        expandedItems: string[];
        page: number;
    };
    static defaultProps: {
        noDataLabel: string;
    };
    render(): JSX.Element;
}
export default Table;
