import React, { Component } from 'react';
import { TextField } from '../TextField';

interface MenuProps {
    header?: any
    search?: boolean
    toolsLeft?: any[]
    toolsRight?: any[]
    pin?: boolean
    style?: any
    onSearch?: (value: string) => void
}
class Menu extends React.Component<MenuProps> {

    render() {

        const { children, header, toolsLeft, toolsRight, style, search, onSearch } = this.props;

        const isDouble = (search || toolsLeft)

        const HeaderJSX = typeof header != 'object' ? header : <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>;

        const SearchJSX = (
            <div className='ui-menu-interactions-tools-search'><TextField onChange={(value) => onSearch && onSearch(value)} /></div>
        )

        return (
            <div className='ui-menu' style={style}>
                {header && <div className={'ui-menu-header' + (isDouble ? ' header-max' : '')}>{HeaderJSX}</div>}
                <div className='ui-menu-interactions'>
                    {search && <div className='ui-menu-interactions-tools'>{SearchJSX}{toolsLeft && toolsLeft}</div>}
                    {children && <div className={'ui-menu-interactions-nav' + (isDouble ? ' nav-min' : '')}>{children}</div>}
                </div>
                {toolsRight && <div className='ui-menu-tools'>{toolsRight}</div>}
            </div>
        )
    }
}

export default Menu;