import { CSSProperties, Dispatch, SetStateAction, ReactNode } from "react";

declare namespace TabsTypes {

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        bp?: number[]

        menuItems: MenuItemProps[]
        withoutRouter?: boolean
        activeMenuItem: number
    }

    export interface MenuProps {
        items: TabsTypes.MenuItemProps[]
        activeItemIndex: number
        onItemClick: Dispatch<SetStateAction<number>>
    }

    export interface MenuItemProps {
        title: string
        value: string | number
        component?: ReactNode
        onClick?: () => void
    }

    export interface ContentProps {

    }
}

export default TabsTypes;