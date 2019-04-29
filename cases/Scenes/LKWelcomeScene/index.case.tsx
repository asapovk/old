import React, { useState } from 'react';
import { ABR, MRG, Smorodina } from '../../../src/logos'
import { LKWelcomeScene as Scene } from '../../../src/scenes';
import useStyles from '../../../src/hooks/useTheme';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import '../../../src/styles/scss/main.scss';

export default () => {

    const styles = useStyles();
    const [form, setForm] = useState<string>('signIn');
    let logo: any = <Smorodina />;

    if (styles.theme.name === "gazpromTheme") {
        logo = <MRG />;
    }

    if (styles.theme.name === "abrTheme") {
        logo = <ABR />;
    }

    if (styles.theme.name === "blackCurrant") {
        logo = <Smorodina color="#fff" />
    }

    const SignInForm = (
        <SignIn onRegister={() => setForm('signUp')} />
    )

    const SignUpForm = (
        <SignUp onEnter={() => setForm('signIn')} />
    )

    return (
        <Scene
            logo={logo}
            form={form === 'signIn' ? SignInForm : SignUpForm}
            story={<Hello />}
            actions={[
                {
                    title: "Оплатить услуги",
                    icon: "card",
                    onAction: () => { }
                },
                {
                    title: "Передать показания",
                    icon: "counter"
                }
            ]}
            hideActions={form === 'signUp'}
        />
    )
}

const Hello = (props) => {
    return (
        <article>
            <h1>你好</h1>
            <h1>Hola</h1>
            <h1>السلام عليكم</h1>
            <h1>नमस्ते</h1>
            <h1>Oi</h1>
            <h1>Здравствуйте </h1>
            <h1>今日は </h1>
            <h1>ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ। </h1>
            <h1>Halo</h1>
            <h1>안녕하십니까 </h1>
            <h1>侬好</h1>
            <h1>Guten Tag</h1>
            <h1>Bonjour</h1>
            <h1>నమస్కారం </h1>
            <h1>नमस्कार</h1>
            <h1>Merhaba</h1>
            <h1>السلام علیکم</h1>
            <h1>chào bạn</h1>
            <h1>வணக்கம்</h1>
            <h1>你好</h1>
            <h1>Ciao</h1>
            <h1>درود</h1>
            <h1>สวัสดี </h1>
            <h1>食飽未</h1>
            <h1>નમસ્તે</h1>
            <h1>Вітаю</h1>
            <h1>നമസ്തെ</h1>
            <h1>你好</h1>
            <h1>ನಮಸ್ತೆ</h1>
            <h1>ନମସ୍କାର</h1>
            <h1>مرحبا</h1>
            <h1>नमस्ते </h1>
            <h1>Salam</h1>
            <h1>Pranam</h1>
            <h1>Sannu</h1>
            <h1>Ẹ n lẹ</h1>
            <h1>Здраво</h1>
        </article>
    )
}