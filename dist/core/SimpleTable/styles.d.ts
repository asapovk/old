import { SerializedStyles } from '@emotion/core';
import Types from './types';
export interface TableStyles {
    tableContainer: SerializedStyles;
    groupRowContainer: ({ hideHeaders }: {
        hideHeaders: any;
    }) => SerializedStyles;
    rowContainer: ({ header, hideHeaders }: {
        header: any;
        hideHeaders: any;
    }) => SerializedStyles;
    paginationContainer: SerializedStyles;
    paginationButton: (active: boolean) => SerializedStyles;
    groupTitle: SerializedStyles;
    row: ({ header, groupHeader, last }: {
        header: any;
        groupHeader: any;
        last: any;
    }) => SerializedStyles;
    cell: (width?: number, borders?: Types.Borders, columnAlignment?: Types.ColumnAlignment) => SerializedStyles;
    actionCell: SerializedStyles;
    actionIcon: (active?: boolean) => SerializedStyles;
    expandRow: (active: boolean) => SerializedStyles;
    noDataContainer: SerializedStyles;
}
declare const _default: () => TableStyles;
export default _default;
