import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { ICard } from '../../Card/Card';
export interface ISubMenuItem {
    key: string;
    card: ICard;
    component: ReactElement<any>;
}
export interface IMenuItem {
    title: string;
    key: string;
    submenuItems: ISubMenuItem[];
}
export interface IMainScene {
    menuItems: IMenuItem[];
}
interface IMainSceneContext {
    menuItems: IMenuItem[];
    currentMenuItem: IMenuItem;
    setCurrentMenu: Dispatch<SetStateAction<IMenuItem>>;
    currentSubMenuItem: ISubMenuItem;
    setCurrentSubMenu: Dispatch<SetStateAction<ISubMenuItem>>;
}
export declare const MainSceneContext: React.Context<IMainSceneContext>;
export declare function useMainContext(): IMainSceneContext;
declare const _default: (props: IMainScene) => JSX.Element;
export default _default;
