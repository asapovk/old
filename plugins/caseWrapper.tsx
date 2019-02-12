import React from 'react';
import { Viewport } from '../src';
import { IPluginProps } from 'showcase-ui/types'
class Wrapper extends React.Component {
    state = {
        theme: 'blackCurrant'
    }

    componentWillMount() {
        this.changeTheme = this.changeTheme.bind(this)
        const theme = localStorage.getItem('UItheme');
        if (theme) {
            this.setState({
                theme: theme
            })
        }
        this.context.setContext({ changeTheme: this.changeTheme });
    }

    changeTheme(theme: string) {
        localStorage.setItem('UItheme', theme);
        this.setState({
            theme: theme
        })
    }

    render() {
        return (
            <Viewport theme={this.state.theme}>{this.props.children}</Viewport>
        )
    }
}

export default (props: IPluginProps) => {
    Wrapper.contextType = props.context;
    props.wrapper(Wrapper);
};