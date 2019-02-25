/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, C1, Icon } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';
import { Spinner } from '../../core';
import Login from './Login';

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

    const Sidebar = props.components.sidebar && (
        <div css={styles.sidebar.container(!isMobile || (isMobile && props.showSidebar))}>
            <div css={styles.sidebar.background} />
            <Login {...props} styles={styles} />
            <div css={styles.sidebar.content}>
                {props.components.sidebar}
            </div>
            <div css={styles.sidebar.logo}>
                {props.components.logo}
            </div>
        </div>
    )

    const Main = (
        <div css={styles.main.container(isMobile && props.showSidebar)}>
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