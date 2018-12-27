import React, { Component } from 'react';
import { Flexbox, Icon, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends Component {
    render() {
        return (
            
                <Flexbox justifyContent="center" alignItems="center" style={{ right: '0', bottom: '0', top: '0', left: '0', position: 'absolute' }}>
                    <Flexbox column justifyContent="center" alignItems="center">
                        <Icon type='smorodina' size={4} style={{ marginBottom: '1rem' }} />
                        <p style={{ fontSize: '1.5rem' }}>Smorodina UI</p>
                    </Flexbox>
                </Flexbox>
            
        )
    }
}