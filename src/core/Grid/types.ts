import { CSSProperties, Dispatch, SetStateAction } from "react";

declare namespace GridTypes {

    export type Borders = "left" | "right" | "all" | "none"
    export type ColumnAlignment = "flex-start" | "flex-end" | "center"

    export interface Row {
        groupId?: number
        [name: string]: any
    }

    export interface Column {
        dataIndex: string
        title?: string
        width?: number
        render?: (row: Object, value: any) => any
        borders?: Borders
        alignment?: ColumnAlignment
    }

    export interface Group {
        title: string
        value: number | string
    }

    export interface Pagination {
        pageSize: number
        pageNeighbours: number
    }

    export interface PaginationProps {
        dataLength: number
        currentPage: number
        setCurrentPage: Dispatch<SetStateAction<number>>
        pagination: Pagination
    }

    export interface ExpandForm {
        key: string | number
        render: (row: Object) => any
    }

    export interface Props {
        style?: CSSProperties,
        className?: string
        children?: any
        indexKey?: string
        data: Row[]
        columns: Column[]
        groupKey?: string
        groups?: Group[]
        pagination?: Pagination
        noDataComponent?: JSX.Element;
        onRowClick?: (row: Object) => any
        search?: boolean
        onSearch?: (value: any) => void,
        hideHeaders?: boolean
        expandForm?: ExpandForm
    }

    export interface HeaderProps {
        columns: Column[]
    }

    export interface SubHeaderProps {
        title: string
        columnsLength: number
        hideHeaders?: boolean
    }

    export interface RowProps {
        columns: Column[]
        row: Row
        expandForm?: ExpandForm
        onRowClick?: (row: Object) => any
        expandedRowId: string | null
        rowId: string
    }

}

export default GridTypes;