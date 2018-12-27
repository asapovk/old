import React from 'react';
import { Flexbox } from '../..';
import { GuestSceneProps } from './types'

import Main from './Main';
import Footer from './Footer';

export default (props: GuestSceneProps) => {

    return (
        <Flexbox flexDirection="column">
            <Main {...props} />
            <Footer {...props} />
        </Flexbox>
    );
}