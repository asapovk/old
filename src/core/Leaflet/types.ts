import { CSSProperties } from "react";

declare namespace LeafletTypes {
    interface Props {
        style?: CSSProperties,
        className?: string
        data: Data[]
        groups?: Group[]
        noData?: React.ReactNode
        capacity?: number
        grids?: Grid[]
        groupKey?: string
        nameKey: string
    }

    interface MenuProps extends Props {
        onChoose: (i: number) => void
        styles: any
        active?: number
    }

    type Data = {
        [key: string]: any
    }

    type Group = {
        label: string
        value: number | string
    }

    type Grid = {
        title?: string
        titleKey?: string
        rows: GridRow[]
    }

    type GridRow = {
        name?: string
        dataKey?: string
    }

    interface State {
        items: number[]
        showMenu: boolean
    }

    interface Action {
        type: 'openMenu' | 'setItem' | 'addItem' | 'back' | 'close'
        payload?: any
    }
}

export default LeafletTypes;