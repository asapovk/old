import { Dispatch, SetStateAction } from 'react';
import { TableStyles } from '../styles';
import Types from '../types';
interface PaginationProps {
    dataLength: number;
    currentPage: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    styles: TableStyles;
    pagination: Types.Pagination;
}
declare const _default: (props: PaginationProps) => JSX.Element | null;
export default _default;
