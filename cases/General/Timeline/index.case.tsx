import React from 'react';
import { Flexbox, Timeline, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss'

export default () => {

    const dots = [{
        value: '123',
        bottomTitle: 'title1'
    }, {
        value: '456',
        bottomTitle: 'title2'
    }, {
        value: '789',
        bottomTitle: 'title3'
    }, {
        value: '012',
        bottomTitle: 'title4'
    }];

    return (
        <Viewport>
            <Flexbox p={40}>
                <Timeline
                    dots={dots}
                    leftTitle='10 октября'
                    rightTitle='10 октября'
                />
            </Flexbox>
        </Viewport>
    )
}