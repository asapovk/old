import { ReactNode } from "react";
import React from 'react';

export interface IConfig {
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (node: ReactNode) => void
    panel: (content: PanelRenderProps) => void
    wrapper: (Wrapper: typeof React.Component) => void,
    wrapperProps: (wrapperProps: any) => void,
    context: any
}

export interface PanelRenderProps {
    item?: PanelRenderItem,
    tool?: React.ReactNode
}

export interface PanelRenderItem {
    name: string,
    render: React.ReactNode
}