/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import createStyles from './styles';
import { ThemeInterface } from '../../../../styles';

export default () => {

    const duration = 300;

    const transitionStyles = {
        entering: {
            transform: 'skewX(-4deg) translateX(-50rem)',
        },
        entered: {
            transform: 'skewX(-4deg) translateX(-6rem)',
        },
        exiting: {
            transform: 'skewX(-4deg) translateX(-50rem)',
        },
        exited: {
            transform: 'skewX(-4deg) translateX(-6rem)',
        },
    };

    return (
        <CSSTransition
            timeout={0}
            in={true}
            appear
        >
            {state => {
                return (
                    <div css={(theme: ThemeInterface) => css({
                        width: '42rem',
                        backgroundColor: theme.background.hex,
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        transition: `transform ${duration}ms ease-out`,
                        willChange: 'transform',
                        ...transitionStyles[state]
                    })} />
                )
            }}
        </CSSTransition>
    )
}