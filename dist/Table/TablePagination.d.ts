import React from 'react';
export interface PaginationProps {
    pageSize: number;
}
interface Props {
    pagination: PaginationProps;
    page: number;
    data: any[];
    onChange: (page: number) => void;
    children?: any;
}
declare class TableCheckbox extends React.Component<Props> {
    render(): JSX.Element | null;
}
export default TableCheckbox;
