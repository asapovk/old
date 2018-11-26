import React, { Fragment, useState } from 'react';
import Scene from '../../src/scenes/LKMainScene';
import { Card, Menu, Icon, Stories } from '../../src';
import useStyles from '../../src/hooks/useStyles';
import SmoLogo from '../../src/logos/smorodina';
import AccountSelect from '../../src/LKComponents/AccountSelect';
import TableStory from './TableStory';

const Header = () => {
    const [active, onClick] = useState(0);
    const styles = useStyles();
    return (
        <Menu
            header={<SmoLogo style={{ width: "8rem" }} />}
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
    const [card, setCard] = useState(0);
    return (
        <Fragment>
            <AccountSelect />
            <div style={{ margin: "1.25rem" }}>
                <Card
                    title="Платежи"
                    info={{
                        value: "342,34 ₽",
                        description: "к оплате"
                    }}
                    action={{
                        label: "Оплатить",
                        onAction: () => { }
                    }}
                    subtitle="1 неоплатченная услуга"
                    active={card === 0}
                    onClick={() => setCard(0)}
                />
                <Card
                    title="Показания"
                    subtitle="Обновлены 16 дней назад"
                    action={{
                        label: "Передать",
                        onAction: () => { }
                    }}
                    info={{
                        value: "5 m3",
                        description: "Передано"
                    }}
                    active={card === 1}
                    onClick={() => setCard(1)}
                />
                <Card
                    title="Начисления"
                    subtitle="Декабрь 2018"
                    action={{
                        label: "Квитанция",
                        onAction: () => { }
                    }}
                    info={{
                        value: "13 492,42 ₽",
                        description: "начислено"
                    }}
                    active={card === 2}
                    onClick={() => setCard(2)}
                />
            </div>
        </Fragment>
    )
}
const MainTop = () => {
    const styles = useStyles();

    return (
        <div style={{
            background: styles.theme.background2.hex,
            height: 300,
            whiteSpace: "nowrap"
        }}>1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal</div>
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
                mainTop: <MainTop />,
                main: <Main />,
                sideBottom: <Stories title="Рекомендации" stories={[{
                    label: "Кукушка пробила голову андрею",
                    image: "http://storage.onbird.ru/bird/photo/gluhaya-kukushka/gluhaya-kukushka%20foto%201%20%28onbird.ru%29.jpg",
                    labelColor: "#e1f1cb",
                    onClick: () => { },
                    read: false,
                }, {
                    label: "МихаЕль -- дерево без границ",
                    image: "https://www.taigatree.ru/wp-content/uploads/2016/05/5.jpg",
                    labelColor: "#ffffff",
                    onClick: () => { },
                    read: false,
                }, {
                    label: "Text of storieeeeEEE.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiciBxA-xkgNIzzgB96Z4VYzstyBrVbUkcH5P_U_j7Rlcew4KLA",
                    labelColor: "#000000",
                    onClick: () => { },
                    read: true,
                }]} />,
            }}
            displaySideBar={true}
        />
    )
}