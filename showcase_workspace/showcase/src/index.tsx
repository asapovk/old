import * as React from "react";
import * as ReactDOM from "react-dom";
import { Showcase } from './interface/Showcase';
import './styles/main.css';
import core from './core';

//@ts-ignore
global.showcaseRef = null

//@ts-ignore
ReactDOM.render(<Showcase ref={ref => { global.showcaseRef = ref }} />, document.getElementById('showcase'));

core.initPlugins();