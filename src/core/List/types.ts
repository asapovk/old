import { CSSProperties } from "react";

declare namespace ListTypes {

    export interface Row {
        groupId?: number
        [name: string]: any
    }

    export interface Group {
        title: string
        value: number | string
    }

    export interface ExpandForm {
        key: string | number
        render: (row: Object) => any
    }

    export interface Props {
        style?: CSSProperties,
        className?: string
        narrowed?: boolean
        minified?: boolean
        minifiedRowsCount?: number
        moreLabel?: string
        lessLabel?: string
        data: Row[]
        groupKey?: string
        groups?: Group[]
        noDataComponent?: JSX.Element;
        onRowClick?: (row: Object) => any
        expandForm?: ExpandForm
        rowRender: (row: { [key: string]: any }) => any
    }

    export interface MoreContainerProps {
        moreLabel?: string
        lessLabel?: string
        minified: boolean
        setMinified: () => void
    }
}

export default ListTypes;