import { PanelRenderProps } from '../../../types'
import core from '../index'

export default (content: PanelRenderProps) => {
    core.ref!.addMenuData(content.item, content.tool);
};