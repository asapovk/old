import { CSSProperties, Dispatch, SetStateAction } from "react";
declare namespace TabsTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        bp?: number[];
        menuItems: MenuItemProps[];
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
    }
    interface ContentProps {
    }
}
export default TabsTypes;
