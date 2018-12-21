import React from 'react';
import { IPluginProps } from '../showcase_workspace/showcase/types'

function PanelPlugin(props: IPluginProps) {
    props.panel({
        item: {
            name: 'Plugin',
            render: () => <div>Hello World!</div>
        }
    })
}

export default PanelPlugin;