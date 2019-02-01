/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Flexbox, Button, C1 } from '../../';
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
                    <div>
                        <div css={styles.sidebar.user.container}>
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
                                    <Button
                                        decoration='none'
                                        label='Выйти'
                                        onClick={props.user.onLogout}
                                        thin={true}
                                    />
                                </Fragment>
                                : (<div css={styles.sidebar.logo}>
                                    {props.components.logo}
                                </div>)
                            }
                        </div>
                        <div css={styles.sidebar.content}>{props.components.sidebar}</div>
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