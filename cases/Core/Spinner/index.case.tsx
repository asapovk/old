import React, { Fragment } from 'react';
import { Flexbox, Spinner } from '../../../src';
import '../../../src/styles/scss/main.scss';

export default class Story extends React.Component {
    modal?: any = null;

    render() {
        return (
            <Flexbox alignContent="center" justifyContent="center">
                <Spinner spinning />
            </Flexbox>
        )
    }
}