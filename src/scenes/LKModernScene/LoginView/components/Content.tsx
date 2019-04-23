/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { Button, C2, Flexbox, TextField, Widget } from '../../../../core';
import { Smorodina } from '../../../../logos';
import { ThemeInterface } from '../../../../styles';

const duration = 450;

const transitionStyles = {
    entering: {
        opacity: 0,
        transform: 'translate(-10%, 0)',
    },
    entered: {
        opacity: 1,
        transform: 'translate(0, 0)',
    },
    exiting: {
        opacity: 0,
        transform: 'translate(-300%, 0)',
    },
    exited: {
        opacity: 0,
        transform: 'translate(-300%, 0)',
    },
};

export default (props: { active: boolean, setActive: any }) => {
    return (
        <CSSTransition
            timeout={duration}
            in={props.active}
            appear
            children={
                state => (
                    <Flexbox css={css({
                        flexDirection: 'column',
                        zIndex: 1,
                        marginTop: '2.5rem',
                        transition: `transform ${duration}ms ease-out, opacity ${duration * 2}ms ease-out`,
                        willChange: 'transform, opacity',
                        justifyContent: 'space-between',
                        flex: 1,
                        ...transitionStyles[state]
                    })}>
                        <Flexbox column mb='3rem'>
                            <Flexbox column>
                                <div css={style.mainHeader}><span>Добрый день, </span>Илья!</div>
                                <div css={style.subHeader}>Рады видеть Вас снова!</div>
                            </Flexbox>
                            <Flexbox column css={style.inputContainer}>
                                <TextField tabIndex={1} decoration='borderless' size='extra-large' floatingLabel='Ваш логин' />
                                <div css={(theme: ThemeInterface) => css({ margin: '0 -4rem', borderBottom: `1px solid ${theme.pale.hex}` })} />
                                <TextField tabIndex={2} type='password' decoration='borderless' size='extra-large' floatingLabel='Пароль' />
                            </Flexbox>
                            <Flexbox mt='1.5rem' justifyContent='space-between'>
                                <C2 color='lowlight'>Нет учетной записи? <C2 link color='highlightSecondary'>Зарегистрироваться</C2></C2>
                                <C2 link>Забыли пароль?</C2>
                            </Flexbox>
                            <Flexbox mt='2.75rem'>
                                <Button label='Войти' onClick={() => props.setActive(false)} color='highlight' size='large' css={css({ width: '8rem' })} />
                            </Flexbox>
                        </Flexbox>
                        <Flexbox column>
                            <Flexbox mb='2.25rem'>
                                <Widget decoration='none' css={css({ width: '100%' })}>
                                    <Flexbox css={css({ height: '5rem', padding: '0 1rem' })} alignItems='center' justifyContent='space-between'>
                                        <C2 color='lowlight' children='Оплата без регистрации' />
                                        <Flexbox column justifyContent='center' css={(theme: ThemeInterface) => css({ height: '100%', paddingLeft: '1rem', borderLeft: `1px solid ${theme.pale.hex}` })}>
                                            <C2 bold link children='Оплатить' />
                                        </Flexbox>
                                    </Flexbox>
                                </Widget>
                            </Flexbox>
                            <Flexbox>
                                <Smorodina color='#777777' style={{ width: '135px' }} />
                            </Flexbox>
                        </Flexbox>
                    </Flexbox>
                )
            }
        />
    )
}



const style = {
    mainHeader: (theme: ThemeInterface) => css({
        fontSize: '2rem',
        fontWeight: 900,
        lineHeight: '3rem',
        "> span": {
            color: theme.lowlight.hex
        }
    }),

    subHeader: (theme: ThemeInterface) => css({
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        color: theme.lowlight.hex
    }),

    inputContainer: (theme: ThemeInterface) => css({
        borderRadius: '0.5rem',
        borderColor: theme.pale.hex,
        borderWidth: '1px',
        borderStyle: 'solid',
        overflow: 'hidden',
        backgroundColor: theme.interface.hex,
        marginTop: '4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,.1)',
    }),

}