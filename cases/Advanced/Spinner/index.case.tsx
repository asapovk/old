import React, { Fragment } from 'react';
import { Flexbox, Spinner, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    modal?: any = null;

    render() {
        return (
            <Viewport>
                <Flexbox alignContent="center" justifyContent="center">
                    <Spinner spinning />
                </Flexbox>
            </Viewport>
        )
    }
}