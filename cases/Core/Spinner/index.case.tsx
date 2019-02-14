import React, { Fragment } from 'react';
import { Flexbox, Spinner } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    modal?: any = null;

    render() {
        return (
            <Flexbox flex="1" style={{ height: '100%' }} alignContent="center" justifyContent="center">
                <Spinner spinning dark center />
            </Flexbox>
        )
    }
}