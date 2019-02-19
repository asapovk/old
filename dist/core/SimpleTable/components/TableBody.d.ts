import Types from '../types';
import { TableStyles } from '../styles';
interface TableBodyProps {
    data: Object[];
    columns: Types.Column[];
    groups?: Types.Group[];
    groupKey?: string;
    styles: TableStyles;
    expandForm?: Types.ExpandForm;
    hideHeaders?: boolean;
    onRowClick?: (row: any) => void;
    currentPage: number;
}
declare const _default: (props: TableBodyProps) => JSX.Element;
export default _default;
