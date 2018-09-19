import React, { Component, CSSProperties } from 'react';
import Theme from '../Themes';

interface Props {
    style?: CSSProperties,
    children?: any
}
export interface ThemedProps {
    theme
}
class Spin extends Component<Props & ThemedProps> {
    render() {
        let className = "ui-spin";

        return (
            <span className={className} style={this.props.style}>{this.props.children}</span>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <Spin {...props} theme={{

            }} />
        )}
    </Theme>
);