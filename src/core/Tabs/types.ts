import { CSSProperties, Dispatch, SetStateAction, ReactNode } from "react";

declare namespace TabsTypes {

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        bp?: number[]

        items: ItemProps[]
        activeItem: number
    }

    export interface MenuProps {
        items: TabsTypes.ItemProps[]
        activeItem: number
        onItemClick: Dispatch<SetStateAction<number>>
    }

    export interface ItemProps {
        title: string
        value: string | number
        component?: ReactNode
        onClick?: () => void
    }

    export interface ContentProps {

    }
}

export default TabsTypes;