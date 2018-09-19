import React, { Fragment } from 'react';
import { Spinner } from '../../src';

export default class Story extends React.Component {
    modal?: any = null;

    render() {
        return (
            <Fragment>
                <Spinner spinning />
            </Fragment>
        )
    }
}