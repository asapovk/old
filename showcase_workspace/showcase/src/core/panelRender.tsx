import React from "react";
import { Panel } from '../interface/Panel';
import { PanelRenderProps, PanelRenderItem } from '../../types'
import core from './index'

export default (content: PanelRenderProps) => {
    core.ref!.addMenuData(content.item, content.tool);
};