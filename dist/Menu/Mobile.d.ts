import { IMenuItems } from './Menu';
interface IMobileMenu {
    active: boolean;
    setActive: (active: boolean) => void;
}
interface IMobileMenuItems {
    active: boolean;
    items: IMenuItems;
    tools?: any[];
}
export declare function MobileMenu(props: IMobileMenu): JSX.Element;
export declare function MobileMenuItems(props: IMobileMenuItems): JSX.Element;
export {};
