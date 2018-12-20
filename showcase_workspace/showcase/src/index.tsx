import * as React from "react";
import * as ReactDOM from "react-dom";
import { Showcase } from './interface/Showcase';
import './styles/main.css';
import core from './core';

let showcaseRef = null as any

ReactDOM.render(<Showcase ref={ref => showcaseRef = ref} />, document.getElementById('showcase'));

core.initPlugins(showcaseRef);