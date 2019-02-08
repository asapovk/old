import Types from '../types';
import { TableStyles } from '../styles';
interface GroupHeaderRowProps {
    columns: Types.Column[];
    title: string;
    styles: TableStyles;
    expandForm?: Types.ExpandForm;
}
declare const _default: (props: GroupHeaderRowProps) => JSX.Element;
export default _default;
