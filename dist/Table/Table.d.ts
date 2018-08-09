import React, { Component } from 'react';
export declare enum TableActionsTypes {
    select = "select",
    expand = "expand",
    button = "button",
    trigger = "trigger"
}
export interface ActionsBasic {
    onClick?: (dataRow: any) => void;
}
export interface ActionsSelect extends ActionsBasic {
    type: TableActionsTypes.select;
}
export interface ActionsExpand extends ActionsBasic {
    type: TableActionsTypes.expand;
}
export interface ActionsButton extends ActionsBasic {
    type: TableActionsTypes.button;
    label: string;
}
export interface ActionsTrigger extends ActionsBasic {
    type: TableActionsTypes.trigger;
    label: string;
    target: {
        render: Component;
        cancelLabel?: string;
        actions?: ActionsButton[];
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
