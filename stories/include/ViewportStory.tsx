import React, { Component } from 'react';
import { Flexbox, Icon } from '../../src';

export default class Story extends Component {
    render() {
        return (
            <Flexbox justifyContent="center" alignItems="center" style={{ right: '0', bottom: '0', top: '0', left: '0', position: 'absolute' }}>
                <Flexbox column justifyContent="center" alignItems="center">
                    <Icon type='smorodina' style={{ fontSize: '6rem', marginBottom: '1rem' }} />
                    <p style={{ fontSize: '1.5rem' }}>Smorodina UI</p>
                </Flexbox>
            </Flexbox>
        )
    }
}