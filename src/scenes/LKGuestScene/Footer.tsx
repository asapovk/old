import React, { useState, useEffect } from 'react';
import { Flexbox, Icon } from '../..';
import useBrowser from '../../hooks/useBrowser';
import { GuestSceneProps } from '.';
import useStyles from '../../hooks/useTheme';

export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = useStyles();

    const st = {
        root: {
            background: "#eee"
        }
    }

    if (size.height <= 600 || !props.footerActions) {
        return null;
    }

    return (
        <Flexbox flex={1} style={st.root}>
            {props.footerActions!.map((action, index) =>
                <Flexbox onClick={action.onAction} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
                    <Icon type={action.icon} size={3} style={{ marginBottom: "1rem" }} />
                    <div style={{ color: styles.theme.highlight.hex }}>
                        {action.title} <Icon type="right" />
                    </div>
                </Flexbox>
            )}
        </Flexbox>
    );
}