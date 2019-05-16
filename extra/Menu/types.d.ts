import { CSSProperties } from "react";
declare namespace MenuTypes {
    interface Props {
        style?: CSSProperties;
        className?: string;
        children?: any;
        items: ItemProps[];
        activeItem: number;
        alignMobile?: 'flex-start' | 'flex-end' | 'center';
        onClick?: (item: ItemProps, index: number, path?: string) => void;
    }
    interface ItemProps {
        title: string;
        path?: string;
        component?: any;
    }
    interface BurgerProps {
        onClick: (state: boolean) => void;
        styleContainer: any;
        styleButton: any;
        styleTitle: any;
        currentMenu: ItemProps;
        alignMobile?: 'flex-start' | 'flex-end' | 'center';
    }
    interface StyleProps {
        alignMobile?: 'flex-start' | 'flex-end' | 'center';
        burgerActive?: boolean;
    }
}
export default MenuTypes;
