/** @jsx jsx */
import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import React from 'react';
import { Flexbox, Icon } from '../..';
import useBrowser from '../../hooks/useBrowser';
import { GuestSceneProps } from './types'

export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = useStyles();

    if (size.height <= 600 || !props.footerActions) {
        return null;
    }

    return (
        <Flexbox flex={1} css={styles.footer.main}>
            <Flexbox flex={1} css={styles.footer.wrapper}>
                {props.footerActions!.map((action, index) =>
                    <Flexbox css={index > 0 ? { ...styles.footer.item, ...styles.footer.separator } : styles.footer.item} onClick={action.onAction} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                        <Icon css={styles.footer.icon} type={action.icon} />
                        <div css={styles.footer.label}>
                            {action.title} <Icon type="text-right" />
                        </div>
                    </Flexbox>
                )}
            </Flexbox>
        </Flexbox>
    );
}