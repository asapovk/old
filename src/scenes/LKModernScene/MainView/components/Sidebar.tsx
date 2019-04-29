/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import { ThemeInterface } from '../../../../styles';
import { Flexbox, Card, Icon, C3 } from '../../../../core';
import Login from './Login';

const duration = 200;

const transitionStyles = {
    entering: { transform: 'translateX(-20rem)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-20rem)' },
    exited: { transform: 'translateX(-20rem)' },
};

export default (props: { active: boolean, setView: any, setActive: any }) => {
    return (
        <CSSTransition
            timeout={duration}
            in={props.active}
            appear
            onExited={() => props.setView('Login')}
            children={
                state => <div css={css({
                    position: 'sticky',
                    top: 0,
                    left: 0,
                    minHeight: '100%',
                    zIndex: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '16rem',
                    boxSizing: 'border-box',
                    padding: '2rem',
                    transition: `transform ${duration}ms ease-out`,
                    willChange: 'transform',
                    WebkitBackfaceVisibility: 'hidden',
                    WebkitTransform: 'translateZ(0)',
                    ...transitionStyles[state]
                })}>
                    <Login name='a.babyuk@icloud.com' shortname='AB' onLogout={() => props.setActive(false)} />
                    <Flexbox flex={1} css={styles.content}>
                        {accounts.map((account, index) =>
                            <Flexbox flexGrow={0} flexShrink={0} alignItems='center' css={css({ marginBottom: '1.25rem' })} key={'card-' + index}>
                                <Flexbox
                                    alignItems='center'
                                    css={css({ position: 'absolute', left: index === 0 ? '-3.5rem' : '-8rem' })}>
                                    <ActiveIndicator />
                                </Flexbox>
                                <Card />
                            </Flexbox>
                        )}
                    </Flexbox>
                    <Flexbox alignItems='flex-end' justifyContent='space-between'>
                        <Icon size='4rem' type='smorodina' color='textOnAccent' />
                        <C3 mb='0.25rem' children='v 1.5.5 BETA' css={(theme: ThemeInterface) => css({ color: theme.textOnAccent.rgba(.5) })} />
                    </Flexbox>
                </ div>
            }
        />
    )
}

const ActiveIndicator = () => {
    return (
        <Flexbox
            alignItems='center'
            justifyContent='center'
            css={(theme: ThemeInterface) => css({
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '50%',
                backgroundColor: theme.interface.rgba(0.15)
            })}>
            <div css={(theme: ThemeInterface) => css({
                width: '1.625rem',
                height: '1.625rem',
                borderRadius: '50%',
                backgroundColor: theme.interface.hex
            })} />
        </Flexbox>
    )
};

const accounts = [
    { label: '1000001433', value: 1 },
    { label: '1000001459', value: 2 },
    // { label: '95285-F', value: 3 },
    // { label: '95285-F', value: 4 },
    // { label: '95285-F', value: 5 },
    // { label: '95285-F', value: 3 }
];

const styles = {
    container: css({
        position: 'relative',
        top: 0,
        left: 0,
        minHeight: '100%',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        width: '16rem',
        boxSizing: 'border-box',
        padding: '2rem',

        /*
        *  Chrome scroll lag repair   
        */
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
    }),

    content: css({
        flexDirection: 'column',
        zIndex: 4,
        marginTop: '2.5rem'
    }),
}