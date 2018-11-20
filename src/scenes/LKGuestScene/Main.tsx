import React, { useState, useEffect } from 'react';
import { Flexbox, TextField, Button } from '../..';
import Logo from './Logo';
import useBrowseWidth from '../../hooks/useBrowseWidth';

import Form from './Forms';
import { GuestSceneProps } from '.';

export default (props: GuestSceneProps) => {

    const size = useBrowseWidth();

    const st = {
        root: {
            background: "white"
        }
    }

    return (
        <Flexbox flex={2} style={st.root}>
            <Flexbox flexDirection="column" flex={1} justifyContent="center" >
                <Flexbox flexDirection="column" style={{ width: 300 }} alignSelf="center">
                    <Logo />
                    <h2>Личный кабинет абонента СМОРОДИНА</h2>
                    <Form {...props} />
                </Flexbox>
            </Flexbox>
            {size.width >= 500 && (
                <Flexbox flex={1}>
                    right
                </Flexbox>
            )}
        </Flexbox>
    );
}