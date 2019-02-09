import { CSSProperties } from "react";
declare namespace SimpleTableTypes {
    type Borders = "left" | "right" | "all";
    type ColumnAlignment = "flex-start" | "flex-end" | "center";
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
    interface ExpandForm {
        key: string | number;
        render: (row: Object) => any;
    }
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        indexKey?: string;
        data: Object[];
        columns: Column[];
        groupKey?: string;
        groups?: Group[];
        pagination?: Pagination;
        NoDataComponent?: React.SFC<{}>;
        onRowClick?: (row: Object) => any;
        search?: boolean;
        onSearch?: (value: any) => void;
        hideHeaders?: boolean;
        borders?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal';
        expandForm?: ExpandForm;
    }
}
export default SimpleTableTypes;
