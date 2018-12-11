import React, { useState, useEffect, CSSProperties } from 'react';
import { Flexbox, TextField, Button } from '../..';
import Form from './Forms';
import { GuestSceneProps } from '.';

import useBrowser from '../../hooks/useBrowser';
import useStyles from '../../hooks/useTheme';


export default (props: GuestSceneProps) => {

    const size = useBrowser();
    const styles = useStyles();

    const st = {
        root: {
            background: styles.scenes.lkguest.main.backgroundColor,
        } as CSSProperties,
        title: {
            color: styles.scenes.lkguest.main.titleColor,
            marginBottom: 20
        }
    }
    if (size.height >= 600 && size.width >= 600) {
        st.root.borderBottomLeftRadius = "100% 40px";
        st.root.borderBottomRightRadius = "100% 40px";
    }

    return (
        <Flexbox flex={2} style={st.root}>
            <Flexbox flexDirection="column" flex={1} justifyContent="center" >
                <Flexbox flexDirection="column" style={{ width: 250 }} alignSelf="center">
                    {props.components && props.components.logo}
                    {props.title !== undefined && <h2 style={st.title}>{props.title}</h2>}
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
    );
}