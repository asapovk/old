import { CSSProperties } from "react";

declare namespace TabsTypes {

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        items: ItemProps[]
        activeItem: number
        alignMobile?: 'flex-start' | 'flex-end' | 'center'
        onClick?: (item: ItemProps, index: number, path?: string, ) => void
    }

    export interface ItemProps {
        title: string
        path?: string
        component?: any
    }

    export interface BurgerProps {
        onClick: (state: boolean) => void
        styleButton: any
        styleTitle: any
        currentMenu: ItemProps
        alignMobile?: 'flex-start' | 'flex-end' | 'center'
    }
    export interface StyleProps {
        alignMobile?: 'flex-start' | 'flex-end' | 'center'
        burgerActive?: boolean
    }
}

export default TabsTypes;