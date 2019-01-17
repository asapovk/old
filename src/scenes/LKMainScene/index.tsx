/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';

export default (props: Types.Props) => {

    const styles = createStyles();
    const browser = useBrowser();

    return (
        <Flexbox>
            {props.displaySideBar &&
                <Flexbox css={styles.sidebar.holder}>
                    <div css={styles.sidebar.background} />
                    {browser.isDesktop &&
                        <div css={styles.sidebar.logo.container}>
                            <Flexbox css={styles.sidebar.logo.holder}>
                                <Flexbox css={styles.sidebar.logo.wrapper}>
                                    {props.components.logo}
                                </Flexbox>
                            </Flexbox>
                        </div>
                    }
                    <Flexbox css={styles.sidebar.content} >
                        {props.components.sidebar}
                    </Flexbox>
                </Flexbox>
            }
            <Flexbox css={styles.main.container}>
                <div css={styles.menu.holder}>
                    <div css={styles.menu.desktop}>
                        {props.components.menu}
                    </div>
                </div>
                <Flexbox css={styles.main.top}>
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
        </Flexbox >
    );
}