import { Dispatch, SetStateAction } from 'react';
import { TableStyles } from '../styles';
interface PaginationProps {
    dataLength: number;
    pageSize: number;
    page: number;
    setPage: Dispatch<SetStateAction<number>>;
    styles: TableStyles;
}
declare const _default: (props: PaginationProps) => JSX.Element | null;
export default _default;
