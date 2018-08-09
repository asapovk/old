import React, { Component } from 'react';
import { ActionsButton } from './Table';
interface TableFormProps {
    row: any;
    onCancel: () => void;
    target: {
        render: (row: any) => Component | Element | string | null;
        cancelLabel?: string;
        actions?: ActionsButton[];
    };
}
declare class TableForm extends React.Component<TableFormProps> {
    render(): JSX.Element;
}
export default TableForm;
