/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, C2, C1, Icon } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';
import { Spinner } from '../../core';
import { useState } from 'react';
import { userInfo } from 'os';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    const isMobile = browser.width <= 768;

    if (props.preparing) {
        return (
            <Spinner spinning center />
        )
    }

    const Back = (label, onClick) => (
        <Flexbox css={styles.main.back} onClick={onClick}>
            <Icon type='arrow-left' shape='oval' size='1rem' color='highlight' />
            <C1 children={label} ml='.75rem' />
        </Flexbox>
    )

    const Menu = (
        <Flexbox css={styles.main.menu}>
            {props.back
                ? Back('Назад', () => props.onBack && props.onBack())
                : isMobile && Back('Счета', () => props.onSidebar && props.onSidebar(true))
            }
            {props.components.menu}
        </Flexbox>
    )

    const Login = (props) => {
        const [hovered, setHovered] = useState<boolean>(false);
        return props.user && (
            <Flexbox column css={styles.sidebar.user.container}>
                <Flexbox css={styles.sidebar.user.avatar.container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {hovered && (
                        <Flexbox
                            css={styles.sidebar.user.avatar.change}
                            onClick={() => props.user.onAvatarChange && props.user.onAvatarChange()}
                            children={<Icon type='photo' />}
                        />
                    )}
                    {props.user.avatar
                        ? <div css={styles.sidebar.user.avatar.picture(props.user.avatar)} />
                        : props.user.shortname
                        && <div
                            css={styles.sidebar.user.avatar.shortname}
                            children={(
                                <div children={props.user.shortname.slice(0, 2)} />
                            )}
                        />
                    }
                </Flexbox>
                <C1
                    bold
                    css={styles.sidebar.user.name}
                    children={props.user.name}
                />
                <C2
                    onClick={props.user.onLogout}
                    children='Выйти'
                    pt='.25rem'
                    css={css({ cursor: 'pointer' })}
                />
            </Flexbox>
        )
    }

    const Sidebar = props.components.sidebar && (
        <div css={styles.sidebar.container(!isMobile || (isMobile && props.showSidebar))}>
            <div css={styles.sidebar.background} />
            <Login {...props} />
            <div css={styles.sidebar.content}>
                {props.components.sidebar}
            </div>
            <div css={styles.sidebar.logo}>
                {props.components.logo}
            </div>
        </div>
    )

    const Main = (
        <div css={styles.main.container}>
            <div css={styles.main.holder}>
                {Menu}
                <div>
                    {props.pending
                        ? <Flexbox
                            justifyContent='center'
                            mt={'10rem'}
                            children={<Spinner spinning />}
                        />
                        : props.components.main
                    }
                </div>
            </div>
        </div>
    )

    const Mask = isMobile && props.showSidebar && (
        <div
            css={styles.mask}
            onClick={() =>
                props.onSidebar && props.onSidebar(false)
            }
        />
    )

    return (
        <Flexbox css={styles.container}>
            {Sidebar}{Mask}{Main}
        </Flexbox>
    );
}