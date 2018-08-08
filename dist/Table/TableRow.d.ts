import React from 'react';
interface TableRowProps {
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
}
export default class TableRow extends React.Component<TableRowProps> {
    state: {
        onSelect: boolean;
    };
    onClick(): void;
    render(): JSX.Element;
}
export {};
