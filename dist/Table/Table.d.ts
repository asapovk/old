import React from 'react';
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
}
declare class Table extends React.Component<TableProps> {
    state: {
        selectedItems: string[];
        expandedItems: string[];
        focusItem: string;
    };
    render(): JSX.Element;
}
export default Table;
