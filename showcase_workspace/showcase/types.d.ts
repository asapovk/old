import { ReactNode } from "react";

export interface IConfig {
    CaseWrapper?: any
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    selfContainer: HTMLElement
    render: (node: ReactNode) => void
}