import React, { Component } from 'react';
interface ActionsBasic {
    onAction: (dataRow: {
        [dataIndex: string]: string;
    }, selectedItems: [string]) => void;
}
interface ActionsSelect extends ActionsBasic {
    type: 'select';
}
interface ActionsExpand extends ActionsBasic {
    type: 'expand';
}
interface ActionsButton extends ActionsBasic {
    type: 'button';
    label: string;
}
interface ActionsTrigger extends ActionsBasic {
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
interface TableProps {
    data: [{
        [dataIndex: string]: string;
    }];
    columns: [{
        title?: string;
        dataIndex: string;
        width?: number;
        render?: Component;
    }];
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
    };
    render(): JSX.Element;
}
export default Table;
