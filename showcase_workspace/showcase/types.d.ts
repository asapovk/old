import { ReactNode } from "react";

export interface IConfig {
    plugins?: ((props: IPluginProps) => void)[]
}

export interface IPluginProps {
    cases: any
    config: any
    render: (node: ReactNode) => void
}