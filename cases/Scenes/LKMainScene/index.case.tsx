import React from 'react';
import Scene from '../../../src/scenes/LKMainScene';
import useTheme from '../../../src/hooks/useTheme';
import SmoLogo from '../../../src/logos/smorodina';
import AbrLogo from '../../../src/logos/abr';
import MrgLogo from '../../../src/logos/mrg';
import '../../../src/Styles/scss/main.scss';

import SideMenu from './SideMenu';
import SideBottom from './SideBottom';
import Menu from './Menu';
import Main from './Main';
import MainTop from './MainTop';

export default () => {
    const styles = useTheme();
    let logo = <SmoLogo color={styles.theme.text.hex} />;
    let logoWidth = 10;

    if (styles.theme.name === "gazpromTheme") {
        logo = <MrgLogo />;
        logoWidth = 9;
    }
    if (styles.theme.name === "abrTheme") {
        logo = <AbrLogo />;
        logoWidth = 12;
    }
    if (styles.theme.name === "whiteCurrant") {
        logo = <SmoLogo />;
        logoWidth = 10;
    }
    return (
        <Scene
            components={{
                menu: <Menu />,
                side: <SideMenu logo={logo} logoWidth={logoWidth} />,
                mainTop: <MainTop />,
                main: <Main />,
                sideBottom: <SideBottom />,
            }}
            displaySideBar={true}
        />
    )
}