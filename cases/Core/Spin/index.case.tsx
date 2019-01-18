import React, { Fragment } from 'react';
import { Flexbox, Spin, Icon } from '../../../src';
import '../../../src/styles/scss/main.scss';

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