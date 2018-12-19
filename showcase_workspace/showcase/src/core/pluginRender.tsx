import React, { ReactNode, Component } from "react";
import ReactDOM from 'react-dom';

const PluginRender = (props: { node: ReactNode }) => (
    <>
        {props.node}
    </>
);

export default (Node: React.ReactNode, container: HTMLElement) => {
    ReactDOM.render(<PluginRender node={Node} />, container)
}