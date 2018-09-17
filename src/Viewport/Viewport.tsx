import { ThemeContext, themes, themeNames } from '../Themes';
import React, { Component } from 'react';

interface ViewportProps extends themeNames {
    children?: any
    style?: any
}

class Viewport extends Component<ViewportProps> {

    render() {
        const theme = themes[this.props.theme ? this.props.theme : 'telegramDark'];
        return (
            <ThemeContext.Provider value={theme}>
                <div className='ui-view' id='0cd82567-7684-4147-ab02-dd3c56332364' style={{ ...this.props.style, ...{ background: theme.background } }} children={this.props.children} />
            </ThemeContext.Provider>
        )
    }
}

export default Viewport;