import React from 'react';
import { Viewport } from './src';
import './src/Styles/scss/main.scss';

export default (props: any) => {
    return (
        <Viewport>
            {props.children}
        </Viewport>
    )
};