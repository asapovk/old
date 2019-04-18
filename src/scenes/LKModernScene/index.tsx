/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button } from '../..';
import Login from './Forms/Login';
import Main from './Forms/Main';
import createStyles from './styles';
import { Flexbox } from '../../core';

export default () => {
    const [main, setMain] = useState(false);
    const styles = createStyles();

    const duration = 300;

    const transitionStyles = {
        entering: {
            opacity: 0,
            position: 'relative',
            transform: `translateX(1.5rem)`,
        },
        entered: {
            opacity: 1,
            position: 'relative',
            transform: 'translateX(0)',
        },
        exiting: {
            opacity: 0,
            position: 'absolute',
            transform: `translateX(1.5rem)`,
        },
        exited: {
            opacity: 1,
            position: 'absolute',
            transform: 'translateX(0)'
        },
    };

    return (
        <Flexbox css={styles.container}>
            <CSSTransition timeout={300}>
                <div css={styles.background} />
            </CSSTransition>
            <Login />
        </Flexbox>
    )
}