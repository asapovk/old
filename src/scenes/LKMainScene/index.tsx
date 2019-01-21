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
        <Flexbox flexDirection={browser.isMobile ? 'column' : 'row'}>
            {
                browser.isMobile &&
                <div css={styles.menu.container}>
                    <div css={styles.menu.holder}>
                        {props.components.menu}
                    </div>
                </div>
            }
            {props.displaySideBar &&
                <Flexbox css={styles.sidebar.holder}>
                    {!browser.isMobile &&
                        <Fragment>
                            <div css={styles.sidebar.background} />
                            <div css={styles.sidebar.logo.container}>
                                <Flexbox css={styles.sidebar.logo.holder}>
                                    <Flexbox css={styles.sidebar.logo.wrapper}>
                                        {props.components.logo}
                                    </Flexbox>
                                </Flexbox>
                            </div>
                        </Fragment>
                    }
                    <Flexbox css={styles.sidebar.content} >
                        {props.components.sidebar}
                    </Flexbox>
                </Flexbox>
            }
            {!browser.isMobile &&
                <Flexbox css={styles.main.container}>
                    <div css={styles.menu.container}>
                        <div css={styles.menu.holder}>
                            {props.components.menu}
                        </div>
                    </div>
                    {props.components.mainTop &&
                        <Flexbox css={styles.main.top}>
                            <div css={styles.main.holder}>
                                {props.components.mainTop}
                            </div>
                        </Flexbox>
                    }
                    <Flexbox css={styles.main.content}>
                        <div css={styles.main.holder}>
                            {props.components.main}
                        </div>
                    </Flexbox>
                </Flexbox>
            }
        </Flexbox >
    );
}