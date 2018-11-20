import React, { useState, useEffect } from 'react';
import { Flexbox } from '../..';
import useBrowseWidth from '../../hooks/useBrowseWidth';
import { GuestSceneProps } from '.';

export default (props: GuestSceneProps) => {

    const size = useBrowseWidth();

    const st = {
        root: {
            background: "#eee"
        }
    }

    if (size.height < 600) {
        return null;
    }

    return (
        <Flexbox flex={1} style={st.root}>
            <Flexbox flex={1}>
                left
            </Flexbox>
            <Flexbox flex={1}>
                right
            </Flexbox>
        </Flexbox>
    );
}