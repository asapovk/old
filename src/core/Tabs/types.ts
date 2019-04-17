import { CSSProperties, Dispatch, SetStateAction } from "react";

declare namespace TabsTypes {

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        bp?: number[]

        menuItems: MenuItemProps[]
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
    }

    export interface ContentProps {
        
    }
}

export default TabsTypes;