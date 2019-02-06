import { SerializedStyles } from '@emotion/core';
import Types from './types';
export interface TableStyles {
    tableContainer: SerializedStyles;
    groupRowContainer: SerializedStyles;
    rowContainer: SerializedStyles;
    rowsContainer: SerializedStyles;
    paginationContainer: SerializedStyles;
    paginationButton: (active: boolean) => SerializedStyles;
    groupTitle: SerializedStyles;
    row: (header?: boolean) => SerializedStyles;
    cell: (width?: number, borders?: Types.Borders) => SerializedStyles;
    actionIcon: (active?: boolean) => SerializedStyles;
    expandRow: (active: boolean) => SerializedStyles;
}
declare const _default: () => TableStyles;
export default _default;
