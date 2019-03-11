declare namespace LiquidDropTypes {
    interface Item {
        title: string
        message: string
        active?: boolean
    }
    interface Props {
        badge?: string
        data: Item[]
        onRowClick?: (row: Item, index: number) => void
        className?: string
        noDataText?: string
    }
}

export default LiquidDropTypes
