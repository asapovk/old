/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import { Flexbox } from '../../';
import { useBrowser } from '../../hooks';

import createStyles from './styles';
import Types from './types';
import { MobileMenu, MobileMenuItems } from './Mobile';
import PanelBar from './PanelBar';


export default (props: Types.Props) => {

    const styles = createStyles(props.forElka);
    const browser = useBrowser();
    const { title, style, tools, items, logo, value, onChange, moreLabel } = props;
    const [mobileActive, setMobileActive] = useState(false);

    return (
        <div css={styles.menu.container}>
            <Flexbox css={styles.menu.holder} style={style}>
                {!browser.isDesktop && (
                    <MobileMenu
                        active={mobileActive}
                        setActive={setMobileActive}
                        styles={styles.mobile.hamburger}
                    />
                )}

                {!props.forElka && (
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
                )}

                {browser.isDesktop && (
                    <PanelBar
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
        </div>
    )
}