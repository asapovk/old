import React from 'react';
import { IPluginProps } from '../showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    props.render(
        <div style={{ position: "absolute", background: "black", color: "white", top: 48 }}>Hello</div>
    )
    props.panel({
        item: {
            name: 'Not Simple',
            render: <div>Not Simple</div>
        }
    })
}

export default SimplePlugin;