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
    row: (header?: boolean, groupHeader?: boolean) => SerializedStyles;
    cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => SerializedStyles;
    actionIcon: (active?: boolean) => SerializedStyles;
    expandRow: (active: boolean) => SerializedStyles;
    noDataContainer: SerializedStyles;
}
declare const _default: () => TableStyles;
export default _default;
