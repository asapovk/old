import Types from '../types';
interface TableBodyProps {
    data: Object[];
    columns: Types.Column[];
    style: any;
    groups?: Types.Group[];
    groupKey?: string;
}
declare const _default: (props: TableBodyProps) => JSX.Element;
export default _default;
