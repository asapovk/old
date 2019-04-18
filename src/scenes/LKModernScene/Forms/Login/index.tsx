/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Flexbox, TextField, C2, Button } from '../../../../core';
import createStyles from './styles';
import { ThemeInterface } from '../../../../styles';
import { Smorodina } from '../../../../logos';
import Background from './Background';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default () => {
    const [backgroundReady, setBackgroundReady] = useState(false);
    const styles = createStyles();

    const duration = 300;

    const transitionStyles = {
        entering: {
            opacity: 0,
            transform: 'translateX(-10%)',
        },
        entered: {
            opacity: 1,
            transform: 'translateX(0)',
        },
        exiting: {
            opacity: 1,
            transform: 'translateX(-10%)',
        },
        exited: {
            opacity: 0,
            transform: 'translateX(0)',
        },
    };

    return (
        <Flexbox column css={styles.container}>
            <Background />
            <CSSTransition
                timeout={duration / 2}
                in={true}
                appear
            >
                {state => {
                    return (
                        <Flexbox css={css({
                            flexDirection: 'column',
                            zIndex: 1,
                            marginTop: '2.5rem',
                            transition: `transform ${duration}ms ease-out, opacity ${duration}ms ease-out`,
                            willChange: 'transform, opacity',
                            ...transitionStyles[state]
                        })}>
                            <Flexbox column>
                                <div css={style.mainHeader}><span css={css({ color: '#777777' })}>Добрый день, </span>Илья!</div>
                                <div css={style.subHeader}>Рады видеть Вас снова!</div>
                            </Flexbox>
                            <Flexbox column css={style.inputContainer}>
                                <TextField css={css({ padding: '0 1rem', height: '5rem' })} decoration='borderless' size='extra-large' floatingLabel='Ваш логин' />
                                <div css={(theme: ThemeInterface) => css({ margin: '0 -4rem', borderBottom: `1px solid ${theme.pale.hex}` })} />
                                <TextField css={css({ padding: '0 1rem', height: '5rem' })} decoration='borderless' size='extra-large' floatingLabel='Пароль' />
                            </Flexbox>
                            <Flexbox mt='1.5rem' justifyContent='space-between'>
                                <C2 css={css({ color: '#777777' })}>Нет учетной записи? <C2 link css={(theme: ThemeInterface) => css({ color: theme.highlight.hex })}>Зарегистрироваться</C2></C2>
                                <C2 link css={(theme: ThemeInterface) => css({ color: theme.brand.red.hex })}>Забыли пароль?</C2>
                            </Flexbox>
                            <Flexbox mt='2.75rem'>
                                <Button label='Войти' color='highlight' size='large' css={(theme: ThemeInterface) => css({ width: '8rem', borderRadius: '0.25rem', backgroundColor: theme.brand.red.hex, color: theme.textOnAccent.hex })} />
                            </Flexbox>
                        </Flexbox>
                    )
                }}
            </CSSTransition>
            <Flexbox>
                <Smorodina color='#777777' style={{ width: '135px' }} />
            </Flexbox>
        </Flexbox>
    )

}

const style = {
    mainHeader: css({
        fontSize: '2rem',
        fontWeight: 900,
        lineHeight: '3rem'
    }),

    subHeader: css({
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        color: '#777777'
    }),

    inputContainer: (theme: ThemeInterface) => css({
        borderRadius: '0.5rem',
        borderColor: theme.pale.hex,
        borderWidth: '1px',
        borderStyle: 'solid',
        overflow: 'hidden',
        backgroundColor: theme.background.hex,
        marginTop: '4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,.1)',
        border: '1px solid #E5E5E5'
    }),

}