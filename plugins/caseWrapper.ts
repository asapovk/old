import { Viewport } from '../src';
import { IPluginProps } from '../showcase_workspace/showcase/types'

function caseWrapper(props: IPluginProps) {
    props.wrapper(Viewport);
}


export default caseWrapper;