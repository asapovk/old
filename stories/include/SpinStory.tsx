import React, { Fragment } from 'react';
import { Spin, Icon } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
            <Spin>
                <Icon type='sync' style={{ fontSize: 32 }} />
            </Spin>
        )
    }
}