/** @jsx jsx */
import { SerializedStyles } from '@emotion/core';
import Types from '../types';
interface GroupHeaderRowProps {
    columns: Types.Column[];
    containerStyle: SerializedStyles;
    headerCellStyle: (width?: number, borders?: Types.Borders) => SerializedStyles;
    groupTitleStyle: SerializedStyles;
    title: string;
}
declare const _default: (props: GroupHeaderRowProps) => JSX.Element;
export default _default;
