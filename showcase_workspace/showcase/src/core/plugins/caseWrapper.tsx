import React from "react";
import core from "../index";

export default (Wrapper: typeof React.Component) => {
    core.ref!.addWrapper(Wrapper);
}