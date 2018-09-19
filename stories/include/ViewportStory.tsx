import React, { Fragment } from 'react';
import { Button, Flexbox } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Flexbox column justifyContent="center" alignContent="center" p={40}>
                <span>there's nothing to see.</span>
            </Flexbox>
        )
    }
}