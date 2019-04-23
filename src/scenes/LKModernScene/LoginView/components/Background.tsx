/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { ThemeInterface } from '../../../../styles';

const duration = 300;

const transitionStyles = {
    entering: { transform: 'skewX(-4deg) translateX(-50rem)' },
    entered: { transform: 'skewX(-4deg) translateX(-6rem)' },
    exiting: { transform: 'skewX(-4deg) translateX(-50rem)' },
    exited: { transform: 'skewX(-4deg) translateX(-50rem)' },
};

export default (props: { active: boolean, setView: any }) => {
    return (
        <CSSTransition
            timeout={duration}
            in={props.active}
            appear
            onExited={() => props.setView('Main')}
            children={
                state => <div css={(theme: ThemeInterface) => css({
                    width: '42rem',
                    backgroundColor: theme.interface.hex,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    transition: `transform ${duration}ms ease-out`,
                    willChange: 'transform',
                    ...transitionStyles[state]
                })} />
            }
        />
    )
}