import React from 'react';
export interface PaginationProps {
    pageSize: number;
}
interface Props {
    pagination: PaginationProps;
    page: number;
    searchActive: boolean;
    search?: boolean;
    data: any[];
    onChange: (page: number, searchBar: boolean) => void;
    children?: any;
}
declare class TablePagination extends React.Component<Props> {
    render(): JSX.Element | null;
}
export default TablePagination;