import { ReactNode } from "react";

export interface IConfig {
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (node: ReactNode) => void
    panel: (content: PanelRenderProps) => void
}

export interface PanelRenderProps {
    item?: PanelRenderItem,
    tool?: React.ReactNode
}

export interface PanelRenderItem {
    name: string,
    render: React.ReactNode
}