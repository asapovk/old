import { CSSProperties, Dispatch, SetStateAction } from "react";
declare namespace TabsTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        bp?: number[];
        items: ItemProps[];
        activeItem: number;
        onClick?: (item: ItemProps, index: number, path?: string) => void;
    }
    interface MenuProps {
        items: TabsTypes.ItemProps[];
        activeItem: number;
        onItemClick: Dispatch<SetStateAction<number>>;
    }
    interface ItemProps {
        title: string;
        path?: string;
        component?: any;
    }
    interface ContentProps {
    }
}
export default TabsTypes;
