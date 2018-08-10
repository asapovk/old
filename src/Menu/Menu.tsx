import React, { Component } from 'react';

interface MenuProps {
    header?: any
    search?: boolean
    toolsLeft?: {
        tool: any
        onAction: () => void
    }[]
    toolsRight?: {
        tool: any
        onAction: () => void
    }[]
    pin?: boolean
    style?: any
}
class Menu extends React.Component<MenuProps> {

    componentWillMount() {

    }

    render() {

        const { children, header, toolsLeft, toolsRight, style } = this.props;
        let HeaderJSX = header;

        if (typeof header == 'object') {
            HeaderJSX = <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>
        }

        return (
            <div className='ui-menu' style={style}>
                {header && <div className='ui-menu-header'>{HeaderJSX}</div>}
                <div className='ui-menu-interactions'>
                    {toolsLeft && <div className='ui-menu-interactions-tools'>{toolsLeft}</div>}
                    {children && <div className='ui-menu-interactions-nav'>{children}</div>}
                </div>
                {toolsRight && <div className='ui-menu-tools'>{toolsRight}</div>}
            </div>
        )
    }
}

export default Menu;