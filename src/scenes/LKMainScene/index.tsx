/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Fragment, useEffect } from 'react';
import { Flexbox } from '../../';
import createStyles from './Styles';
import { useBrowser } from '../../hooks';
import Types from './types';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    return (
        <Flexbox>
            <div css={styles.sidebar.holder}>
                <Flexbox css={styles.sidebar.content} flexDirection='column'>
                    {browser.isDesktop &&
                        <div css={styles.sidebar.logo}>{props.components.logo}</div>}
                    {props.components.sidebar}
                </Flexbox>
            </div>
            <Flexbox flexDirection='column' alignItems='center' flex={1}>
                <div css={styles.menu.holder}>
                    <div css={styles.menu.desktop}>
                        {props.components.menu}
                    </div>
                </div>
                <Flexbox css={styles.main.top} justifyContent='center'>
                    <div css={styles.main.holder}>
                        {props.components.mainTop}
                    </div>
                </Flexbox>
                <div css={styles.main.holder}>
                    {props.components.main}
                </div>
                <div css={styles.menu.mobile}>
                    {props.components.menu}
                </div>
            </Flexbox>
        </Flexbox>
    );
}