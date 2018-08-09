import React, { Component } from 'react';
export interface ActionsBasic {
    onAction: (dataRow: {
        [dataIndex: string]: string;
    }, selectedItems: [string]) => void;
}
export interface ActionsSelect extends ActionsBasic {
    type: 'select';
}
export interface ActionsExpand extends ActionsBasic {
    type: 'expand';
}
export interface ActionsButton extends ActionsBasic {
    type: 'button';
    label: string;
}
export interface ActionsTrigger extends ActionsBasic {
    type: 'trigger';
    label: string;
    target: {
        render: Component;
        actions?: {
            label: string;
            onAction: (compData: {
                [dataIndex: string]: string;
            }) => void;
            cancelLabel?: string;
        };
    };
}
export interface TableProps {
    data: any[];
    columns: {
        title?: string;
        dataIndex: string;
        width?: number;
        render?: (row: any, value: any) => any;
    }[];
    actions?: [ActionsSelect | ActionsExpand | ActionsButton | ActionsTrigger];
    border?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
    indexKey?: string;
    scope?: any;
}
declare class Table extends React.Component<TableProps> {
    state: {
        selectedItems: string[];
        expandedItems: string[];
        focusItem: string;
        types: {
            [key: string]: boolean;
        };
    };
    componentWillMount(): void;
    render(): JSX.Element;
}
export default Table;
