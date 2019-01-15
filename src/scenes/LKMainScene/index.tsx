/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Fragment, useEffect } from 'react';
import { Flexbox } from '../../';
import createStyles from './styles';
import useBrowser from '../../hooks/useBrowser';
import { ScrollView } from '../../extra/ScrollView';
import Types from './types';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    return (
        <Fragment>
            <Flexbox css={styles.root}>
                <div css={styles.sidebarHolder}>
                    <Flexbox css={styles.sidebar} flexDirection='column'>
                        {browser.isDesktop && <div css={styles.logo}>{props.components.logo}</div>}
                        {props.components.sidebar}
                    </Flexbox>
                </div>
                <div css={styles.main}>
                    <ScrollView customCss={styles.$mainScroll}>
                        {props.components.mainTop}
                        {props.components.main}
                    </ScrollView>
                    <div css={styles.menuDesktop}>
                        {props.components.menu}
                    </div>
                </div>
            </Flexbox>
            <div css={styles.menuMobile}>
                {props.components.menu}
            </div>
        </Fragment>
    );
}