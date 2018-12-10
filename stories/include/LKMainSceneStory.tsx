import React, { Fragment, useState } from 'react';
import Scene from '../../src/scenes/LKMainScene';
import { Card, Menu, Icon, Stories } from '../../src';
import useStyles from '../../src/hooks/useStyles';
import SmoLogo from '../../src/logos/smorodina';
import AbrLogo from '../../src/logos/abr';
import MrgLogo from '../../src/logos/mrg';
import AccountSelect from '../../src/scenes/LKMainScene/components/AccountSelect';
import MainScrollView from '../../src/scenes/LKMainScene/components/MainScrollView';

import TableStory from './TableStory';

const Header = () => {
    const [active, onClick] = useState(0);
    const styles = useStyles();
    let logo = <SmoLogo style={{ width: "8rem" }} color={styles.theme.text.hex} />;

    if (styles.theme.name === "gazpromTheme") {
        logo = <MrgLogo style={{ width: "5.5rem" }} />;
    }
    if (styles.theme.name === "abrTheme") {
        logo = <AbrLogo style={{ width: "10rem" }} />;
    }
    if (styles.theme.name === "whiteCurrant") {
        logo = <SmoLogo style={{ width: "8rem" }} />;
    }
    return (
        <Menu
            header={logo}
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
const SideMenu = () => {
    const accounts = [
        { label: "1000001433", value: 1 },
        { label: "1000001459", value: 2 },
        { label: "95285-F", value: 3 }
    ];
    const [card, setCard] = useState(0);
    const [account, setAccount] = useState(2 as number | string);
    return (
        <Fragment>
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
            <h1 style={{ paddingLeft: "3.25rem" }}>Други</h1>
            <TableStory />
        </Fragment>
    )
}

export default () => {

    return (
        <Scene
            components={{
                header: <Header />,
                side: <SideMenu />,
                mainTop: <MainScrollView />,
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