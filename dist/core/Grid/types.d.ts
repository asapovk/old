import { CSSProperties, Dispatch, SetStateAction } from "react";
declare namespace GridTypes {
    type Borders = "left" | "right" | "all" | "none";
    type ColumnAlignment = "flex-start" | "flex-end" | "center";
    interface Row {
        groupId?: number;
        [name: string]: any;
    }
    interface Column {
        dataIndex: string;
        title?: string;
        width?: number;
        render?: (row: Object, value: any) => any;
        borders?: Borders;
        alignment?: ColumnAlignment;
    }
    interface Group {
        title: string;
        value: number | string;
    }
    interface Pagination {
        pageSize: number;
        pageNeighbours: number;
    }
    interface PaginationProps {
        dataLength: number;
        currentPage: number;
        setCurrentPage: Dispatch<SetStateAction<number>>;
        pagination: Pagination;
    }
    interface ExpandForm {
        key: string | number;
        render: (row: Object) => any;
    }
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        indexKey?: string;
        data: Row[];
        columns: Column[];
        groupKey?: string;
        groups?: Group[];
        pagination?: Pagination;
        noDataComponent?: JSX.Element;
        onRowClick?: (row: Object) => any;
        search?: boolean;
        onSearch?: (value: any) => void;
        hideHeaders?: boolean;
        expandForm?: ExpandForm;
    }
    interface HeaderProps {
        columns: Column[];
    }
    interface SubHeaderProps {
        title: string;
        columnsLength: number;
        hideHeaders?: boolean;
    }
    interface RowProps {
        columns: Column[];
        row: Row;
        expandForm?: ExpandForm;
        onRowClick?: (row: Object) => any;
        expandedRowId: string | null;
        rowId: string;
    }
}
export default GridTypes;
