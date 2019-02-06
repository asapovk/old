import Types from '../types';
import { TableStyles } from '../styles';
interface TableBodyProps {
    data: Object[];
    columns: Types.Column[];
    groups?: Types.Group[];
    groupKey?: string;
    styles: TableStyles;
    expandForm?: {
        key: string | number;
        render: (row: Object) => any;
    };
}
declare const _default: (props: TableBodyProps) => JSX.Element;
export default _default;
