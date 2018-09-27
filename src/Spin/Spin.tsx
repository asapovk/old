import React, { Component, CSSProperties } from 'react';
import Theme from '../Themes';

interface Props {
    style?: CSSProperties,
    children?: any
}

class Spin extends Component<Props> {
    render() {
        let className = "ui-spin";

        return (
            <span className={className} style={this.props.style}>{this.props.children}</span>
        )
    }
}

export default Spin;