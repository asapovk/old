import React from 'react';
import { IPluginProps } from './showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    props.panel({
        tool: <ThemeSwitch />
    })
}

function ThemeSwitch(props) {
    return <select></select>
}

export default SimplePlugin;