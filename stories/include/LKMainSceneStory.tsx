import React, { Fragment, useState } from 'react';
import Scene from '../../src/scenes/LKMainScene';
import { Card, Menu, Icon } from '../../src';
import useStyles from '../../src/hooks/useStyles';
import SmoLogo from '../../src/logos/smorodina';

const red = { background: "black", border: "1px double" };

const Header = () => {
    const [active, onClick] = useState(0);
    const styles = useStyles();
    return (
        <Menu
            header={<SmoLogo style={{ width: "8rem" }} color={styles.theme.text.hex} />}
            items={{
                active,
                onClick,
                list: [{ label: "Раз" }, { label: "Два" }, { label: "Три" }]
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
            <div style={{ ...red, height: 150, }}>
                ЛИЦЕВЫЕ СЧЕТ
            </div>
            <div style={{ margin: "1.25rem" }}>
                <Card
                    title="Платежи"
                    active={card === 0}
                    onClick={() => setCard(0)}
                />
                <Card
                    title="Начисления"
                    active={card === 1}
                    onClick={() => setCard(1)}
                />
            </div>
        </Fragment>
    )
}
const MainTop = () => {
    return (
        <div style={{ ...red, height: 300, whiteSpace: "nowrap" }}>1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal 1000px scroll horizontal</div>
    )
}
const Main = () => {
    return (
        <div style={{ ...red }}>Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br />Verical scroll<br /></div>
    )
}
const SideBottom = () => {
    return (
        <Fragment>
            <h4 style={{ margin: "1rem" }}>Рекомендации</h4>
            <div style={{ ...red, whiteSpace: "nowrap", overflow: "scroll" }}>
                <div style={{ display: "inline-block", background: "white", margin: "1rem", width: 100, height: 150 }}>Story</div>
                <div style={{ display: "inline-block", background: "white", margin: "1rem", width: 100, height: 150 }}>Story</div>
                <div style={{ display: "inline-block", background: "white", margin: "1rem", width: 100, height: 150 }}>Story</div>
                <div style={{ display: "inline-block", background: "white", margin: "1rem", width: 100, height: 150 }}>Story</div>
            </div>
        </Fragment>
    )
}

export default () => {

    return (
        <Scene
            components={{
                header: <Header />,
                side: <SideMenu />,
                sideBottom: <SideBottom />,
                mainTop: <MainTop />,
                main: <Main />,
            }}
            displaySideBar={true}
        />
    )
}