import { CSSProperties } from 'react';
declare namespace MenuTypes {
    type Item = {
        text: string;
        value: string;
    };
    interface ItemsProps {
        items: Item[];
        value?: string;
        onChange?: (value: string) => void;
    }
    interface Props extends ItemsProps {
        title?: string;
        tools?: React.ReactNode;
        style?: CSSProperties;
        logo?: React.ReactElement<any>;
        value?: string;
        onChange?: (value: string) => void;
        moreLabel?: string;
    }
    interface MobileProps {
        active: boolean;
        setActive: (active: boolean) => void;
        styles: any;
    }
    interface NavBarProps extends ItemsProps {
        moreLabel?: string;
        styles: any;
    }
    interface MobileMenuItemsProps extends ItemsProps {
        active?: boolean;
        styles: any;
    }
    interface NavBarItemProps extends Item {
        onClick?: (value: string) => void;
        className?: string;
    }
}
export default MenuTypes;
