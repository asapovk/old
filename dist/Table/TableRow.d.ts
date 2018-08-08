import React from 'react';
interface TableRowProps {
    data: {
        [dataIndex: string]: string;
    };
    isSelected: boolean;
    isExpanding: boolean;
    isBlur: boolean;
    columns: any;
    actions?: any;
    border?: any;
    scope?: any;
}
export default class TableRow extends React.Component<TableRowProps> {
    state: {
        onSelect: boolean;
    };
    onClick(): void;
    render(): JSX.Element;
}
export {};
