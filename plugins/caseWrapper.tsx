import React from 'react';
import { Viewport } from '../src';
import { IPluginProps } from '../showcase_workspace/showcase/types'

function caseWrapper(props: IPluginProps) {
    Wrapper.contextType = props.context;
    props.wrapper(Wrapper);
}

class Wrapper extends React.Component {
    state = {
        theme: 'blackCurrant'
    }

    constructor(props) {
        super(props);
        this.changeTheme = this.changeTheme.bind(this)
    }

    componentWillMount() {
        const theme = localStorage.getItem('UItheme');
        if (theme) {
            this.setState({
                theme: theme
            })
        }
        this.context.setContext({ changeTheme: this.changeTheme });
    }

    changeTheme(theme) {
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

export default caseWrapper;