import React from 'react';
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
    onRowClick?: any;
}
declare class TableRow extends React.Component<Props> {
    onClick(e: any, row: any): void;
    render(): JSX.Element;
}
export default TableRow;
