import React, { Component } from 'react';
import { Flexbox } from '../../src';

export default class Story extends Component {
    render() {
        return (
            <Flexbox column justifyContent="center" alignContent="center" p={40}>
                <span>there's nothing to see.</span>
            </Flexbox>
        )
    }
}