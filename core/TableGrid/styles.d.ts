declare const _default: () => {
    wrapper: import("@emotion/utils").SerializedStyles;
    container: import("@emotion/utils").SerializedStyles;
    noDataContainer: import("@emotion/utils").SerializedStyles;
};
export default _default;
export declare const rowStyles: ({ expanded, withOpacity, withoutHeaders }: {
    expanded: any;
    withOpacity: any;
    withoutHeaders: any;
}) => {
    rowWrapper: import("@emotion/utils").SerializedStyles;
    rowCellsWrapper: import("@emotion/utils").SerializedStyles;
    rowCell: ({ isAction, borders, alignment, width }: {
        isAction: any;
        borders: any;
        alignment: any;
        width: any;
    }) => import("@emotion/utils").SerializedStyles;
    expandForm: import("@emotion/utils").SerializedStyles;
    icon: import("@emotion/utils").SerializedStyles;
};
export declare const paginationStyles: () => {
    paginationContainer: import("@emotion/utils").SerializedStyles;
    paginationButton: (active: boolean) => import("@emotion/utils").SerializedStyles;
};
export declare const headerStyles: () => {
    headerWrapper: import("@emotion/utils").SerializedStyles;
    headerCell: ({ isAction, borders, alignment, width }: {
        isAction: any;
        borders: any;
        alignment: any;
        width: any;
    }) => import("@emotion/utils").SerializedStyles;
};
export declare const subHeaderStyles: ({ hideHeaders }: {
    hideHeaders: any;
}) => {
    subheader: import("@emotion/utils").SerializedStyles;
};
export declare const getBorders: (borders?: "all" | "left" | "right" | "none" | undefined) => string;
