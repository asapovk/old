import React from "react";
import { Panel } from '../interface/Panel';
import { PanelRenderProps, PanelRenderItem } from '../../types'

export default (content: PanelRenderProps) => {
    //@ts-ignore
    global.showcaseRef.addMenuData(content.item, content.tool);
};