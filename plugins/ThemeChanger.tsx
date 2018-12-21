import React from 'react';
import { IPluginProps } from '../showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    ThemeSwitch.contextType = props.context;
    props.panel({
        tool: <ThemeSwitch />
    })
}

class ThemeSwitch extends React.Component {
    render() {
        return <select onChange={(event) => {
            this.context.wrapperProps({ theme: event.target.value })
        }}>
            <option value="blackCurrant">Черная смородина</option>
            <option value="whiteCurrant">Белая смородина</option>
            <option value="abrTheme">АБР</option>
            <option value="gazpromTheme">Газпром</option>
        </select>
    }
}

export default SimplePlugin;