import Types from '../types';
import { TableStyles } from '../styles';
interface DataRowsProps {
    data: {
        [name: string]: any;
    }[];
    columns: Types.Column[];
    styles: TableStyles;
    expandForm?: Types.ExpandForm;
    hideHeaders?: boolean;
    onRowClick?: (row: any) => void;
}
declare global {
    interface String {
        hashCode: () => number;
    }
}
declare const _default: (props: DataRowsProps) => JSX.Element;
export default _default;
