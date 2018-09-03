import React from 'react';
import { Viewport } from '../../src';

const flexCentered = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

class SampleStory extends React.Component {

    render() {
        return (
            <Viewport style={flexCentered}>
                there's nothing to see.
            </Viewport>
        )
    }
}

export default SampleStory