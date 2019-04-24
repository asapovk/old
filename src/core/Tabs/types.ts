import { CSSProperties, Dispatch, SetStateAction, ReactNode } from "react";

declare namespace TabsTypes {

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        bp?: number[]

        items: ItemProps[]
        activeItem: number
        onClick?: (item: ItemProps, index: number, path?: string, ) => void
    }

    export interface MenuProps {
        items: TabsTypes.ItemProps[]
        activeItem: number
        onItemClick: Dispatch<SetStateAction<number>>
    }

    export interface ItemProps {
        title: string
        path?: string
        component?: any
    }

    export interface ContentProps {

    }
}

export default TabsTypes;