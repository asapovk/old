import { CSSProperties } from "react";

declare namespace SimpleTableTypes {

    export type Borders = "left" | "right" | "all"

    export interface Column {
        dataIndex: string
        title?: string
        width?: number
        render?: (row: Object, value: any) => any
        borders?: Borders
    }

    export interface Group {
        title: string
        value: number | string
    }

    export interface Pagination {
        pageSize: number
    }

    export interface Props {
        style?: CSSProperties,
        className?: string
        children?: any

        indexKey?: string
        data: Object[]
        columns: Column[]
        groupKey?: string
        groups?: Group[]
        pagination?: Pagination
        noDataLabel?: string;
        onRowClick?: (row: Object) => any
        search?: boolean
        onSearch?: (value: any) => void,
        hideHeaders?: boolean
        borders?: 'all' | 'external' | 'internal' | 'vertical' | 'horizontal'
    }
}

export default SimpleTableTypes;