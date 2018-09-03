import React, { Component } from 'react';

interface ViewportProps {
    children?: any
    style?: any
}

class Viewport extends Component<ViewportProps> {
    render() {
        return (
            <div className='ui-view' id='viewport' style={this.props.style} children={this.props.children} />
        )
    }
}

export default Viewport;