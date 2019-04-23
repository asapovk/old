/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { Flexbox, Tabs, Widget } from '../../../../core';
import { ThemeInterface } from '../../../../styles';

const duration = 200;

const transitionStyles = {
    entering: {
        opacity: 0,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
    exited: {
        opacity: 0,
    },
};

export default (props: { active: boolean }) => {
    return (
        <CSSTransition
            timeout={duration}
            in={props.active}
            appear
            children={
                state => (
                    <Flexbox css={(theme: ThemeInterface) => css({
                        backgroundColor: theme.background2.hex,
                        zIndex: 1,
                        padding: '3rem 4rem',
                        transition: `transform ${duration}ms ease-out, opacity ${duration * 2}ms ease-out`,
                        willChange: 'transform, opacity',
                        flex: 1,
                        ...transitionStyles[state]
                    })}>
                        <Tabs children={<Widget />} menuItems={menuElements} activeMenuItem={0} />
                    </Flexbox>
                )
            }
        />
    )
}

const menuElements = [
    { title: 'Счет', value: 0, component: <Widget children="Счет" /> },
    { title: 'История', value: 1, component: <Widget children="История" /> },
    { title: 'Поддержка', value: 2, component: <Widget children="Поддержка" /> },
    { title: 'Настройки', value: 3, component: <Widget children="Настройки" /> }
];