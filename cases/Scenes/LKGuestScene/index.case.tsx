import React, { Fragment } from 'react';
import { Flexbox } from '../../../src';
import { ABR, MRG, Smorodina } from '../../../src/logos'
import Scene from '../../../src/scenes/LKGuestScene';
import useStyles from '../../../src/hooks/useTheme';
import '../../../src/styles/scss/main.scss';

export default () => {

    const styles = useStyles();

    let title;
    let logo: any = <Smorodina color="#fff" />;
    let rightComponent: any;

    if (styles.theme.name === "gazpromTheme") {
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
        logo = <MRG color="#fff" />;
        title = "Вся информация по\u00A0вашим лицевым счетам. Удобно.";
    }

    if (styles.theme.name === "abrTheme") {
        logo = <ABR />;
        title = "БАНК - мечта!";
    }

    if (styles.theme.name === "blackCurrant") {
        logo = <Smorodina color="#fff" />
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
                    message: 'Данные: ' + login + ';' + password
                }
            }}
            onVerify={async (login, password, code) => {
                return {
                    ok: false,
                    message: 'Данные: ' + login + ';' + password + ';' + code
                }
            }}
            footerActions={[
                {
                    title: "Оплатить услуги газоснабжения",
                    icon: "card"
                },
                {
                    title: "Передать показания",
                    icon: "counter"
                }
            ]}
        />
    )
}