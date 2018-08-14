import React, { Component } from 'react';
import { TextField } from '../TextField';

interface MenuProps {
    header?: any
    search?: boolean
    toolsLeft?: any[]
    toolsRight?: any[]
    pin?: boolean
    style?: any
    searchDefaultValue?: string
    searchValue?: string
    onSearch?: (value: string) => void
}
class Menu extends React.Component<MenuProps> {

    render() {

        const { children, header, toolsLeft, toolsRight, style, search, searchValue, searchDefaultValue, onSearch } = this.props;

        const isDouble = (search || toolsLeft)

        const HeaderJSX = !header.lablel ? header : <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>;

        const SearchJSX = (
            <div className='ui-menu-interactions-toolsbar-search'><TextField className='ui-menu-input' value={searchValue} defaultValue={searchDefaultValue} onChange={(value) => onSearch && onSearch(value)} /></div>
        )

        return (
            <div className='ui-menu' style={style}>
                {header && <div className={'ui-menu-header' + (isDouble ? ' header-max' : '')}>{HeaderJSX}</div>}
                <div className='ui-menu-interactions'>
                    {isDouble &&
                        <div className='ui-menu-interactions-toolsbar'>
                            {search && SearchJSX}
                            <div className='ui-menu-interactions-toolsbar-tools'>
                                {toolsLeft && toolsLeft.map((tool, index) => React.cloneElement(tool, { key: index }))}
                            </div>
                        </div>}
                    {children && <div className={'ui-menu-interactions-navbar' + (isDouble ? ' nav-min' : '')}>{children}</div>}
                </div>
                {toolsRight && <div className={'ui-menu-toolsbar' + (isDouble ? ' bar-max' : '')}><div className='ui-menu-toolsbar-tools'>{toolsRight.map((tool, index) => React.cloneElement(tool, { key: index }))}</div></div>}
            </div>
        )
    }
}

export default Menu;