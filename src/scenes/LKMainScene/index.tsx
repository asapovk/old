import React, { ReactElement, useState, useContext, Dispatch, SetStateAction, useEffect } from 'react';
import { Flexbox } from '../..';
import { ICard } from '../../Card/Card';

import MainView from './MainView';
import HeaderMenu from './HeaderMenu';

export interface ISubMenuItem {
    key: string
    card: ICard
    component: ReactElement<any>
}

export interface IMenuItem {
    title: string
    key: string
    submenuItems: ISubMenuItem[]
}

export interface IMainScene {
    menuItems: IMenuItem[]
}

interface IMainSceneContext {
    menuItems: IMenuItem[]
    currentMenuItem: IMenuItem
    setCurrentMenu: Dispatch<SetStateAction<IMenuItem>>
    currentSubMenuItem: ISubMenuItem
    setCurrentSubMenu: Dispatch<SetStateAction<ISubMenuItem>>
}

export const MainSceneContext = React.createContext({} as IMainSceneContext);

export function useMainContext() {
    return useContext(MainSceneContext);
}

export default (props: IMainScene) => {

    const [currentMenuItem, setMenuItem] = useState(props.menuItems[0]);
    const [currentSubMenuItem, setCurrentSubMenu] = useState(currentMenuItem.submenuItems[0]);

    useEffect(() => {
        setCurrentSubMenu(currentMenuItem.submenuItems[0]);
    }, [currentMenuItem.key]);

    const defaulContext = {
        menuItems: props.menuItems,
        currentMenuItem: currentMenuItem,
        setCurrentMenu: setMenuItem,
        currentSubMenuItem: currentSubMenuItem,
        setCurrentSubMenu: setCurrentSubMenu
    };

    return (
        <MainSceneContext.Provider value={defaulContext}>
            <Flexbox style={{ height: '100%' }} flexDirection='column'>
                <Flexbox style={{ height: 64 }}>
                    <HeaderMenu />
                </Flexbox>
                <Flexbox flex={1}>
                    <MainView />
                </Flexbox>
            </Flexbox>
        </MainSceneContext.Provider>
    );
}