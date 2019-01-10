import React from 'react';
import Scene from '../../../src/scenes/LKMainScene';
import useTheme from '../../../src/hooks/useTheme';
import { MRG, ABR, Smorodina } from '../../../src/logos';
import '../../../src/Styles/scss/main.scss';

import Sidebar from './Sidebar';
import Menu from './Menu';
import Main from './Main';
import MainTop from './MainTop';

export default () => {
    const styles = useTheme();
    let logo = <Smorodina color={styles.theme.text.hex} />;
    let logoWidth = 10;

    if (styles.theme.name === "gazpromTheme") {
        logo = <MRG />;
        logoWidth = 9;
    }
    if (styles.theme.name === "abrTheme") {
        logo = <ABR />;
        logoWidth = 12;
    }
    if (styles.theme.name === "whiteCurrant") {
        logo = <Smorodina />;
        logoWidth = 10;
    }
    return (
        <Scene
            components={{
                menu: <Menu />,
                logo: logo,
                sidebar: <Sidebar />,
                mainTop: <MainTop />,
                main: <Main />,
            }}
            displaySideBar={true}
        />
    )
}