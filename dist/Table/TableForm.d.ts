import React from 'react';
import { ActionsButton } from './Table';
interface TableFormProps {
    row: any;
    onCancel: () => void;
    target: {
        render: (row: any) => any;
        cancelLabel?: string;
        actions?: ActionsButton[];
    };
}
declare class TableForm extends React.Component<TableFormProps> {
    render(): JSX.Element;
}
export default TableForm;
