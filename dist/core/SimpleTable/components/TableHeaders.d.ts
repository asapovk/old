/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import Types from '../types';
interface TableHeadersProps {
    columns: Types.Column[];
    rowStyle: SerializedStyles;
    cellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles;
}
declare const _default: (props: TableHeadersProps) => JSX.Element;
export default _default;
