import React from 'react';
import { IPluginProps } from './showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    props.render(
        <div style={{ position: "absolute", background: "red", color: "white" }}>Hello world.</div>
    )
}

export default SimplePlugin;