import { CSSProperties, Dispatch, SetStateAction, ReactNode } from "react";
declare namespace TabsTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        bp?: number[];
        menuItems: MenuItemProps[];
        withoutRouter?: boolean;
        activeMenuItem: number;
    }
    interface MenuProps {
        items: TabsTypes.MenuItemProps[];
        activeItemIndex: number;
        onItemClick: Dispatch<SetStateAction<number>>;
    }
    interface MenuItemProps {
        title: string;
        value: string | number;
        component?: ReactNode;
    }
    interface ContentProps {
    }
}
export default TabsTypes;
