declare const _default: ({ gridTemplateColumns }: {
    gridTemplateColumns: any;
}) => {
    wrapper: import("@emotion/utils").SerializedStyles;
    container: import("@emotion/utils").SerializedStyles;
    noDataContainer: import("@emotion/utils").SerializedStyles;
};
export default _default;
export declare const rowStyles: () => {
    rowWrapper: import("@emotion/utils").SerializedStyles;
    rowCellsWrapper: ({ expandForm }: {
        expandForm: any;
    }) => import("@emotion/utils").SerializedStyles;
    rowCell: ({ borders, alignment, expanded, expandForm }: {
        borders: any;
        alignment: any;
        expanded: any;
        expandForm: any;
    }) => import("@emotion/utils").SerializedStyles;
    expandForm: ({ expanded, columnsLength }: {
        expanded: any;
        columnsLength: any;
    }) => import("@emotion/utils").SerializedStyles;
    icon: ({ expanded }: {
        expanded: any;
    }) => import("@emotion/utils").SerializedStyles;
};
export declare const paginationStyles: () => {
    paginationContainer: import("@emotion/utils").SerializedStyles;
    paginationButton: (active: boolean) => import("@emotion/utils").SerializedStyles;
};
export declare const headerStyles: () => {
    headerWrapper: import("@emotion/utils").SerializedStyles;
    headerCell: ({ borders, alignment }: {
        borders: any;
        alignment: any;
    }) => import("@emotion/utils").SerializedStyles;
};
export declare const subHeaderStyles: ({ columnsLength, hideHeaders }: {
    columnsLength: any;
    hideHeaders: any;
}) => {
    subheader: import("@emotion/utils").SerializedStyles;
};
export declare const getBorders: (borders?: "all" | "left" | "right" | "none" | undefined) => string;
