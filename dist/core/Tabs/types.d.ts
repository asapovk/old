import { CSSProperties, Dispatch, SetStateAction, ReactNode } from "react";
declare namespace TabsTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        bp?: number[];
        items: ItemProps[];
        activeItem: number;
    }
    interface MenuProps {
        items: TabsTypes.ItemProps[];
        activeItem: number;
        onItemClick: Dispatch<SetStateAction<number>>;
    }
    interface ItemProps {
        title: string;
        value: string | number;
        component?: ReactNode;
        onClick?: () => void;
    }
    interface ContentProps {
    }
}
export default TabsTypes;
