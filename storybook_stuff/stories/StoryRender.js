import React, { useState, useEffect } from 'react';
import { Viewport, Select, Flexbox, Checkbox, Styles } from '../src';

let interval;

const View = (props) => {
    // const linesTSX = (color) => {
    //     let lines = [];
    //     for (let i = 0; i < 180; i++) {
    //         lines.push(<p style={{ background: color, marginTop: i === 0 ? 0 : '1rem' }}>&nbsp;</p>)
    //     }
    //     return lines;
    // }
    // const [theme, setTheme] = useState(localStorage.getItem('THEME') || 'blackCurrant');
    // useEffect(() => {
    //     if (interval) {
    //         clearInterval(interval);
    //     }
    //     interval = setInterval(() => {
    //         const currentTheme = localStorage.getItem('THEME');
    //         if (theme !== currentTheme) {
    //             setTheme(currentTheme);
    //         }
    //     }, 100);
    // }, [theme]);

    return (
        <Viewport>
            {props.children}
        </Viewport>
    )
}
export default (Name) => () => {
    const C = require('./include/' + Name).default;
    return <View><C /></View>
}
