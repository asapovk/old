import Types from '../types';
import { TableStyles } from '../styles';
interface DataRowsProps {
    row?: {
        [name: string]: any;
    };
    columns: Types.Column[];
    header?: boolean;
    groupHeader?: boolean;
    styles: TableStyles;
    expandForm?: {
        key: string | number;
        render: (row: Object) => any;
    };
}
declare const _default: (props: DataRowsProps) => JSX.Element;
export default _default;