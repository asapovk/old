/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, C2, C1 } from '../../';
import createStyles from './styles';
import { useBrowser } from '../../hooks';
import Types from './types';
import { Fragment } from 'react';

export default (props: Types.Props) => {

    const styles = createStyles(props.displaySideBar);
    const browser = useBrowser();

    return (
        <Flexbox flexDirection={browser.isMobile ? 'column' : 'row'}>
            {/** Sidebar Container */}
            {(props.components.sidebar && props.displaySideBar) && (
                <div css={styles.sidebar.container}>
                    <div css={styles.sidebar.background} />
                    <Flexbox flexDirection='column' css={styles.sidebar.user.container}>
                        {props.user ?
                            <Fragment>
                                <div
                                    css={styles.sidebar.user.avatar}
                                    children={(
                                        <div children={props.user.shortname.slice(0, 2) || 'П'} />
                                    )}
                                />
                                <C1
                                    bold
                                    css={styles.sidebar.user.name}
                                    children={props.user.name}
                                />
                                <C2
                                    onClick={props.user.onLogout}
                                    children='Выйти'
                                    pt='.25rem'
                                />
                            </Fragment>
                            : (<div css={styles.sidebar.logo}>
                                {props.components.logo}
                            </div>)
                        }
                    </Flexbox>
                    <div css={styles.sidebar.content}>
                        {props.components.sidebar}
                    </div>
                    {props.user && (
                        <div css={styles.sidebar.logo}>
                            {props.components.logo}
                        </div>
                    )}
                </div>
            )}

            {/** Main Container */}
            <div css={styles.main.container}>
                <div css={styles.main.holder}>
                    <div css={styles.main.menu}>{props.components.menu}</div>
                    {props.components.main}
                </div>
            </div>
        </Flexbox>
    );
}