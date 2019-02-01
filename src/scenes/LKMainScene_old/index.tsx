/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { Flexbox } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';

export default (props: Types.Props) => {

    const styles = createStyles(props.displaySideBar);
    const browser = useBrowser();

    return (
        <Flexbox
            justifyContent='center'
            flexDirection={browser.isMobile ? 'column' : 'row'}
        >
            {browser.isMobile && (
                <div css={styles.menu.container}>
                    <div css={styles.menu.holder}>
                        {props.components.menu}
                    </div>
                </div>
            )}
            {props.displaySideBar && (
                <Flexbox css={styles.sidebar.container}>
                    <div css={styles.sidebar.content}>
                        {props.components.sidebar}
                        <div>
                            {props.components.logo}
                        </div>
                    </div>
                </Flexbox>
            )}
            {!browser.isMobile && (
                <Flexbox css={styles.main.container}>
                    <div css={styles.menu.container}>
                        {props.components.menu}
                    </div>
                    <Flexbox css={styles.main.content}>
                        {props.components.main}
                    </Flexbox>
                </Flexbox>
            )}
        </Flexbox>
    );
}