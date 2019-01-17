/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';

import { Flexbox } from '..';
import { useBrowser } from '../../hooks';

import createStyles from './styles';
import Types from './types';
import { MobileMenu, MobileMenuItems } from './Mobile';
import NavBar from './NavBar';


export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();
    const { title, style, tools, items, logo, value, onChange, moreLabel } = props;
    const [mobileActive, setMobileActive] = useState(false);

    return (
        <Flexbox flexDirection='column'>
            <Flexbox css={styles.menu.holder} style={style}>
                {!browser.isDesktop && (
                    <MobileMenu
                        active={mobileActive}
                        setActive={setMobileActive}
                        styles={styles.mobile.hamburger}
                    />
                )}
                <Flexbox
                    alignItems='center'
                    flexGrow={browser.isDesktop ? 0 : 1}
                    css={styles.menu.header}
                    children={logo
                        ? logo
                        : <div
                            css={styles.menu.title}
                            children={title}
                        />
                    }
                />
                {browser.isDesktop && (
                    <NavBar
                        items={items}
                        value={value}
                        styles={styles.navbar}
                        onChange={onChange}
                        moreLabel={moreLabel} />
                )}
                {tools && (
                    <Flexbox
                        alignItems='center'
                        justifyContent='flex-end'
                        css={styles.menu.toolbar}
                        children={tools}
                    />
                )}
            </Flexbox>
            {!browser.isDesktop && (
                <MobileMenuItems
                    items={items}
                    value={value}
                    styles={styles.navbar}
                    onChange={onChange}
                    active={mobileActive}
                />
            )}
        </Flexbox>
    )
}