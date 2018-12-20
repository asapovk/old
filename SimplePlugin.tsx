import React from 'react';
import { IPluginProps } from './showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    props.render(
        <div style={{ position: "absolute", background: "red", color: "white" }}>Hello world.</div>
    )
    props.panel({
        item: {
            name: 'Simple',
            render: <div>Simple</div>
        }
    })
}

export default SimplePlugin;