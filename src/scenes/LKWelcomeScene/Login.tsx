/** @jsx jsx */
import { jsx } from '@emotion/core'
import createStyles from './styles';
import React from 'react';
import { Flexbox, Icon, C1 } from '../..';
import Form from './Forms';
import { GuestSceneProps } from './types'
import { useBrowser } from '../../hooks';


export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = createStyles();
    const Logo = props.logo && <div css={styles.login.logo}>{props.logo}</div>;
    const Title = props.title && <span css={styles.login.title}>{props.title}</span>;

    return (
        <Flexbox css={styles.login.container}>
            <Flexbox css={styles.login.wrapper}>
                <Flexbox css={styles.login.welcome} flexDirection="column">
                    {Logo}
                    {Title}
                    <Form {...props} />
                    <Flexbox css={styles.login.actions.container}>
                        {props.actions!.map((action, index) =>
                            <Flexbox key={index} css={styles.login.actions.item} onClick={action.onAction} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                                <Icon css={styles.login.actions.icon} type={action.icon} />
                                <C1 link>{action.title}</C1>
                            </Flexbox>
                        )}
                    </Flexbox>
                </Flexbox>
            </Flexbox>
        </Flexbox>
    );
}