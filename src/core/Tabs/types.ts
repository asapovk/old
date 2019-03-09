import { CSSProperties } from "react";
import { IconTypes } from "../../types";

declare namespace TabsTypes {
    export interface Tab {
        key: string,
        title: React.ReactNode
        content: React.ReactNode
        icon: IconTypes.IconTypes.Type
    }

    export interface Props {
        style?: CSSProperties
        className?: string
        children?: any
        bp?: number[]

        tabs: Tab[]
        reverseContainer?: boolean
        noDataComponent?: JSX.Element
    }
}

export default TabsTypes;