/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Flexbox, C1, C2, Icon } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';
import { Spinner } from '../../core';
import Login from './Login';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    const isMobile = browser.width <= 1024;

    if (props.preparing) {
        return (
            <Flexbox css={css({ height: "100%" })} column justifyContent="center" alignContent="center" alignItems="center">
                <Spinner spinning />
                {typeof props.preparing === "string" && (
                    <C2 bold color="lowlight" css={css({ marginTop: "2rem" })}>{props.preparing}</C2>
                )}
            </Flexbox>
        )
    }

    const Menu = (
        <Flexbox css={styles.main.menu}>
            <Back {...props} styles={styles} isMobile={isMobile} />
            {props.components.menu}
        </Flexbox>
    )

    const Sidebar = props.components.sidebar && (
        <div css={styles.sidebar.container(!isMobile || (isMobile && props.showSidebar))}>
            <div css={styles.sidebar.background} />
            <Login {...props} styles={styles} isMobile={isMobile} />
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
                        ?
                        <Flexbox css={css({ height: "100%" })} column alignItems="center" mt={'10rem'}>
                            <Spinner spinning />
                            {typeof props.pending === "string" && (
                                <C2 bold color="lowlight" css={css({ marginTop: "2rem" })}>{props.pending}</C2>
                            )}
                        </Flexbox>
                        : props.components.main
                    }
                </div>
            </div>
        </div>
    )

    const Mask = props.components.sidebar && (
        <div
            css={styles.mask(!isMobile || (isMobile && props.showSidebar)!)}
            onClick={() => props.onSidebar && props.onSidebar(false)}
        />
    )

    return (
        <Flexbox css={styles.container}>
            {Sidebar}
            {Mask}
            {Main}
        </Flexbox>
    );
}

const Back = (props: Types.Props & { styles: any, isMobile: any }) => {
    let onClick = () => props.onBack && props.onBack();
    let label = 'Назад';

    if (props.isMobile && !props.back) {
        onClick = () => props.onSidebar && props.onSidebar(true);
        label = 'Счета';
    }

    return (
        <Flexbox css={props.styles.main.back(props.back || props.isMobile)} onClick={onClick}>
            <Icon type='arrow-left' shape='oval' size='1rem' color='highlight' />
            <C1 children={label} ml='.75rem' />
        </Flexbox>
    )
}