import React, { Fragment, useState } from 'react';
import Scene from '../../src/scenes/LKMainScene';
import { Card, Menu, Icon, Stories } from '../../src';
import useStyles from '../../src/hooks/useStyles';
import useBrowser from '../../src/hooks/useBrowser';
import SmoLogo from '../../src/logos/smorodina';
import AbrLogo from '../../src/logos/abr';
import MrgLogo from '../../src/logos/mrg';
import { Timeline } from '../../src';

import TableStory from './TableStory';

const Header = () => {
    const [active, onClick] = useState(0);

    return (
        <Menu
            items={{
                active,
                onClick,
                list: [{ label: "Лицевой счет" }, { label: "Документы" }, { label: "Карта отделений" }, { label: "Поддержка" }]
            }}
            toolsRight={[
                <Icon type="settings" size={2} />
            ]}
        />
    )
}
const SideMenu = (props) => {
    const accounts = [
        { label: "1000001433", value: 1 },
        { label: "1000001459", value: 2 },
        { label: "95285-F", value: 3 }
    ];
    const [card, setCard] = useState(0);
    const [account, setAccount] = useState(2 as number | string);
    const browser = useBrowser();

    return (
        <Fragment>
            {browser.isDesktop && <div style={{ padding: '20px 0 40px 0', width: `${props.logoWidth}rem`, margin: '0 auto' }}>{props.logo}</div>}
            {accounts.map((account, index) => <Card
                animation={index % 2 ? "circles" : "waves"}
                active={card === index}
                onClick={() => setCard(index)}
            />)}
        </Fragment>
    )
}

const Main = () => {
    return (
        <Fragment>
            <h1>Други</h1>
            <TableStory />
        </Fragment>
    )
}

const MainTop = () => {
    return (
        <Timeline
            dots={[
                { color: "black", bottomTitle: "Сталинградская битва", value: "17 июля 1942" },
                { color: "black", bottomTitle: "Атаку под Курском", value: "5 июля 1943" },
                { color: "black", bottomTitle: "Освобождение Рима", value: "4 июня 1944" }
            ]}
            leftTitle="22 июня 1941"
            rightTitle="9 мая 1945"
        />
    )
}
export default () => {
    const styles = useStyles();
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
                header: <Header />,
                side: <SideMenu logo={logo} logoWidth={logoWidth} />,
                mainTop: <MainTop />,
                main: <Main />,
                sideBottom: <Stories title="Рекомендации" stories={[{
                    label: "Кукушка пробила голову андрею",
                    image: "http://storage.onbird.ru/bird/photo/gluhaya-kukushka/gluhaya-kukushka%20foto%201%20%28onbird.ru%29.jpg",
                    labelColor: "#e1f1cb",
                    onClick: () => { },
                    read: false,
                    slides: [{
                        image: 'http://www.guten.my1.ru/_ld/2/74962800.jpg',
                        text: 'Это лев',
                        key: 'lev'
                    }, {
                        image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                        text: 'Полетели!',
                        key: 'poletelix'
                    }]
                }, {
                    label: "МихаЕль -- дерево без границ",
                    image: "https://www.taigatree.ru/wp-content/uploads/2016/05/5.jpg",
                    labelColor: "#ffffff",
                    onClick: () => { },
                    read: false,
                    slides: [{
                        image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                        text: 'Полетели!',
                        key: 'poleteli'
                    }, {
                        image: 'http://2.bp.blogspot.com/-3wsVAFGLs3c/UF_SRKZ-HhI/AAAAAAAAC74/MHoqfOauMmk/s640/Man+in+the+Moon+tag+~+lilac-n-lavender.jpg',
                        text: 'Просто текст с картинкой!',
                        key: 'text'
                    }, {
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3aCpaZ-a7mP2OX2FvGnOfrUQO9KWNNGiOkAY-kPEl1sT-2TRQ',
                        text: 'Бухнем!',
                        key: 'buhnem'
                    }]
                }, {
                    label: "Text of storieeeeEEE.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiciBxA-xkgNIzzgB96Z4VYzstyBrVbUkcH5P_U_j7Rlcew4KLA",
                    labelColor: "#000000",
                    onClick: () => { },
                    read: true,
                    slides: [{
                        image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                        text: 'Полетели!',
                        key: 'poleteli'
                    }, {
                        image: 'http://2.bp.blogspot.com/-3wsVAFGLs3c/UF_SRKZ-HhI/AAAAAAAAC74/MHoqfOauMmk/s640/Man+in+the+Moon+tag+~+lilac-n-lavender.jpg',
                        text: 'Просто текст с картинкой!',
                        key: 'text'
                    }, {
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3aCpaZ-a7mP2OX2FvGnOfrUQO9KWNNGiOkAY-kPEl1sT-2TRQ',
                        text: 'Бухнем!',
                        key: 'buhnem'
                    }]
                }]} />,
            }}
            displaySideBar={true}
        />
    )
}