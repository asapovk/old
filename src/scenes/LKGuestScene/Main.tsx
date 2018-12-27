/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import React from 'react';
import { Flexbox } from '../..';
import Form from './Forms';
import { GuestSceneProps } from './types'
import { useBrowser } from '../../hooks';


export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = useStyles();
    const Logo = () => props.components ? <div css={styles.main.logo}>{props.components.logo}</div> : null;
    const Title = () => props.title ? <span css={styles.main.title}>{props.title}</span> : null;

    return (
        <Flexbox css={styles.main.container}>
            <Flexbox css={styles.main.wrapper} flex={1} >
                <Flexbox flexDirection="column" flex={1} justifyContent="center" >
                    <Flexbox css={styles.main.welcome} flexDirection="column" alignSelf="center">
                        <Logo />
                        <Title />
                        <Form {...props} />
                    </Flexbox>
                </Flexbox>
                {
                    size.width >= 500 &&
                    props.components !== undefined &&
                    props.components.right !== undefined &&
                    (
                        <Flexbox flex={1}>
                            {props.components.right}
                        </Flexbox>
                    )}
            </Flexbox>
        </Flexbox>
    );
}