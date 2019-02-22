import React from 'react';
import Scene from '../../../src/scenes/LKMainScene_old';
import useTheme from '../../../src/hooks/useTheme';
import { MRG, ABR, Smorodina } from '../../../src/logos';
import '../../../src/styles/scss/main.scss';

import Sidebar from './Sidebar';
import Menu from './Menu';
import Main from './Main';
import MainTop from './MainTop';

export default () => {
    const styles = useTheme();
    let logo = <Smorodina color={styles.theme.text.hex} />;

    if (styles.theme.name === "gazpromTheme") {
        logo = <MRG />;
    }
    if (styles.theme.name === "abrTheme") {
        logo = <ABR />;
    }
    if (styles.theme.name === "whiteCurrant") {
        logo = <Smorodina />;
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