import { ReactNode } from "react";
import React from 'react';

export interface IConfig {
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (Body: React.SFC<{}>) => void
    panel: (content: PanelRenderProps) => void
    wrapper: (Wrapper: typeof React.Component) => void,
    wrapperProps: (wrapperProps: any) => void,
    context: any
}

export interface PanelRenderProps {
    item?: PanelRenderItem,
    tool?: React.SFC<{}>
}

export interface PanelRenderItem {
    name: string,
    render: React.SFC<{}>
}