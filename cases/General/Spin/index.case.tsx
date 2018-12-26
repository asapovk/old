import React, { Fragment } from 'react';
import { Flexbox, Spin, Icon, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            
                <Flexbox alignContent="center" justifyContent="center">
                    <Spin>
                        <Icon type='sync' style={{ fontSize: 32 }} />
                    </Spin>
                </Flexbox>
            
        )
    }
}