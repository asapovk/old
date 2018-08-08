import React, { Component } from 'react';

interface ViewportProps {
    children?: Component
}

class Viewport extends Component<ViewportProps> {
    render() {
        return (
            <div className='ui-view' children={this.props.children} />
        )
    }
}

export default Viewport;