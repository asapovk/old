import React, { Component } from 'react';
import { TextField } from '../TextField';

interface Tools {
    tool: any
    onAction: () => void
}[]

interface MenuProps {
    header?: any
    search?: boolean
    toolsLeft?: Tools
    toolsRight?: Tools
    pin?: boolean
    style?: any
}
class Menu extends React.Component<MenuProps> {

    render() {

        const { children, header, toolsLeft, toolsRight, style, search } = this.props;

        const HeaderJSX = typeof header != 'object' ? header : <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>;

        const SearchJSX = (
            <div className='ui-menu-interactions-tools-search'><TextField /></div>
        )

        return (
            <div className='ui-menu' style={style}>
                {header && <div className='ui-menu-header'>{HeaderJSX}</div>}
                <div className='ui-menu-interactions'>
                    {search && <div className='ui-menu-interactions-tools'>{SearchJSX}{toolsLeft && toolsLeft}</div>}
                    {children && <div className='ui-menu-interactions-nav'>{children}</div>}
                </div>
                {toolsRight && <div className='ui-menu-tools'>{toolsRight}</div>}
            </div>
        )
    }
}

export default Menu;