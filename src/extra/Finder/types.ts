import { CSSProperties } from "react";

declare namespace FinderTypes {
    export interface Props {
        filter?: boolean
        tip?: boolean
        filterPlaceholder?: string
        style?: CSSProperties
        children?: any
    }

    export interface NavProps {
        label: string
        badge?: string | number
        filter?: boolean
        filterPlaceholder?: string
        setFinderMenu?: (level, index, filter, filterPlaceholder) => void
        finderLevel?: number
        finderIndex?: number,
        active?: boolean,
        children?: any
    }

    export interface FilterProps {
        placeholder?: string
        clearable?: boolean
        onChange: (value, level) => void
        level: number
    }

    export interface SectionProps {
        label?: string
        children?: any
    }
}

export default FinderTypes