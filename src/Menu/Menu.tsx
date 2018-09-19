import React, { Component } from 'react';
import { TextField } from '../TextField';
import { Icon } from '../Icon';
import Theme from '../Themes';

interface Props {
    header?: any
    search?: boolean
    toolsLeft?: any[]
    toolsRight?: any[]
    pin?: boolean
    style?: any
    searchDefaultValue?: string
    searchValue?: string
    onSearch?: (value: string) => void
    onSearchSubmit?: (value: string) => void
    children?: any
}
export interface ThemedProps {
    theme
}
class Menu extends React.Component<Props & ThemedProps> {

    state = {
        searchField: '' as string
    }

    render() {

        const { children, header, toolsLeft, toolsRight, style, search, searchValue, searchDefaultValue, onSearch, theme } = this.props;

        const isDouble = (search || toolsLeft)

        const HeaderJSX = !header.label ? header : <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>;

        const SearchIconTSX = <span className='ui-menu-interactions-toolsbar-search-icon' onClick={() => this.props.onSearchSubmit && this.props.onSearchSubmit(this.state.searchField)}><Icon type='search' /></span>

        const SearchJSX = (
            <div className='ui-menu-interactions-toolsbar-search' style={{
                background: theme.searchBackgroundColor,
                borderColor: theme.borderColor,
                boxShadow: `0px 2px 4px 0px ${theme.shadowColor}`
            }}>
                <TextField
                    value={searchValue}
                    defaultValue={searchDefaultValue}
                    onChange={(value) => {
                        this.setState({ searchField: value });
                        onSearch && onSearch(value);
                    }}
                    decoration='none' />
                {SearchIconTSX}
            </div>
        )

        return (
            <div className='ui-menu' style={{
                backgroundColor: theme.backgroundColor,
                ...style
            }}>
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

export default (props: Props) => (
    <Theme>
        {theme => (
            <Menu {...props} theme={{
                borderColor: theme.pale,
                actionColor: theme.highlight,
                backgroundColor: theme.interface,
                searchBackgroundColor: theme.background,
                shadowColor: theme.shadow
            }} />
        )}
    </Theme>
);
