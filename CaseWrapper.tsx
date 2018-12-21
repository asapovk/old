import React from 'react';
import { Viewport } from './src';
import './src/Styles/scss/main.scss';
import { IPluginProps } from './showcase_workspace/showcase/types'

function SimplePlugin(props: IPluginProps) {
    props.caseWrapper(Viewport);
}


export default SimplePlugin;