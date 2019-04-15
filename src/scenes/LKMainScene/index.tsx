/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { C1, Flexbox, Icon } from '../../';
import { useBrowser } from '../../hooks';
import Login from './Login';
import createStyles from './styles';
import Types from './types';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    const isMobile = browser.width <= 1024;

    const Menu = (
        <Flexbox css={styles.main.menu}>
            <Back {...props} styles={styles} isMobile={isMobile} />
            {props.components.menu}
        </Flexbox>
    )

    const Sidebar = props.components.sidebar && (
        <div css={styles.sidebar.container(isMobile, !isMobile || (isMobile && props.showSidebar))}>
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
        <div css={styles.main.container(isMobile)}>
            <div css={styles.main.holder}>
                {Menu}
                <div>
                    {props.components.main}
                </div>
            </div>
        </div>
    )

    const Mask = props.components.sidebar && (
        <div
            css={styles.mask(isMobile && props.showSidebar!)}
            onClick={() => props.onSidebar && props.onSidebar(false)}
        />
    )

    return (
        <Fragment>
            {Sidebar}
            <Flexbox css={styles.container(isMobile, isMobile && props.showSidebar!)}>
                {Mask}
                {Main}
            </Flexbox>
        </Fragment>
    );
}

const Back = (props: Types.Props & { styles: any, isMobile: any }) => {
    let onClick = () => props.onBack && props.onBack();
    let label = 'Назад';
    let iconType = 'arrow-left'

    if (props.isMobile && !props.back) {
        onClick = () => props.onSidebar && props.onSidebar(true);
        label = 'Счета';
        iconType = 'other';
    }

    return (
        <Flexbox css={props.styles.main.back(props.back || props.isMobile)} onClick={onClick}>
            <Icon type={iconType} shape='oval' size='1rem' color='highlight' />
            <C1 children={label} ml='.75rem' />
        </Flexbox>
    )
}