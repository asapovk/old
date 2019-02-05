/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import Types from '../types';
interface DataRowsProps {
    data: Object[];
    columns: Types.Column[];
    rowStyle: SerializedStyles;
    cellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles;
}
declare const _default: (props: DataRowsProps) => JSX.Element;
export default _default;
