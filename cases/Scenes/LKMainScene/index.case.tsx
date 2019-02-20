import React, { useState } from 'react';
import Scene from '../../../src/scenes/LKMainScene';
import useTheme from '../../../src/hooks/useTheme';
import { MRG, ABR, Smorodina } from '../../../src/logos';
import '../../../src/styles/scss/main.scss';

import Sidebar from './Sidebar';
import Menu from './Menu';
import Main from './Main';

export default () => {
    const styles = useTheme();

    const [open, setOpen] = useState<boolean>(false);
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
                sidebar: <Sidebar setOpen={setOpen} />,
                main: <Main />,
            }}
            showSidebar={open}
            onSidebar={(state) => setOpen(state)}
            user={{
                name: 'Наталья Ростова',
                shortname: 'НР',
                onLogout: async () => new Promise((res, rej) => {
                    console.log('logout');
                })
            }}
            pending={false}
            preparing={false}
        />
    )
}