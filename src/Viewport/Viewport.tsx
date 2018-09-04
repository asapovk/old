import React, { Component } from 'react';

interface ViewportProps {
    children?: any
    style?: any
}

class Viewport extends Component<ViewportProps> {
    render() {
        return (
            <div className='ui-view' id='0cd82567-7684-4147-ab02-dd3c56332364' style={this.props.style} children={this.props.children} />
        )
    }
}

export default Viewport;