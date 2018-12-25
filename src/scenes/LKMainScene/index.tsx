/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Fragment } from 'react';
import { Flexbox } from '../../';
import useStyles from './useStyles';
import useBrowser from '../../hooks/useBrowser';
import { ScrollView } from '../../ScrollView';
interface IProps {
    components: {
        menu?: React.Component | any
        side?: React.Component | any
        sideBottom?: React.Component | any
        mainTop?: React.Component | any
        main?: React.Component | any
    },
    /**
     * Display side bar instead of 
     * mains (only for mobile resolution)
     */
    displaySideBar?: boolean
}

export default (props: IProps) => {
    // const browser = useBrowser();
    const styles = useStyles();
    return (
        <Fragment>
            <Flexbox css={styles.root}>
                <div css={styles.side}>
                    <ScrollView customCss={styles.$sideScroll}>
                        {props.components.side}
                        {props.components.sideBottom}
                    </ScrollView>
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