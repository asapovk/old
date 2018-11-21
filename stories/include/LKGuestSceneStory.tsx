import React, { Fragment } from 'react';
import { Flexbox } from '../../src/Flexbox';
import SmorodinaLogo from '../../logos/smorodina';
import MrgLogo from '../../logos/mrg';
import AbrLogo from '../../logos/abr';
import Scene from '../../src/scenes/LKGuestScene';
import useStyles from '../../src/hooks/useStyles';

export default () => {

    const styles = useStyles();

    let title;
    let logo: any = <SmorodinaLogo style={{ marginBottom: 20, width: "100%" }} />;
    let rightComponent: any;

    if (styles.theme.name === "gazprom") {
        rightComponent = (
            <Flexbox flex="1" alignContent="center" alignItems="center" justifyContent="center">
                <img
                    style={{
                        width: "24rem",
                        height: "24rem"
                    }}
                    src="https://storage1b.censor.net/images/0/7/b/9/07b92231179b5786b7b8e160a8a37f22/original.jpg"
                />
            </Flexbox>
        );
        logo = <MrgLogo color="#fff" style={{ width: 200 }} />;
        title = "Вся информация по вашим лицевым счетам. Удобно.";
    }

    if (styles.theme.name === "abr") {
        logo = <AbrLogo />;
        title = "БАНК - мечта!";
    }

    if (styles.theme.name === "black-currant") {
        logo = <SmorodinaLogo color="#fff" style={{ marginBottom: 20, width: "100%" }} />
    }

    return (
        <Scene
            title={title}
            config={{
                newPasswordsMinLength: 8,
            }}
            components={{
                logo: logo,
                right: rightComponent
            }}
            onLogin={async (login, password) => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject({
                            ok: false,
                            message: "Не верный логин или пароль"
                        })
                    }, 1000);
                }) as any;
            }}
            onRegister={async (login, password) => {
                return {
                    ok: false,
                    message: 'Ха-ха, я знаю твой пароль ' + password
                }
            }}
            footerActions={[
                {
                    title: "Оплатить услуги газоснабжения",
                    icon: "settings"
                },
                {
                    title: "Передать показания",
                    icon: "clock"
                }
            ]}
        />
    )
}