import React from 'react';
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

class Menu extends React.Component<Props> {

    state = {
        searchField: '' as string
    }

    render() {

        const { children, header, toolsLeft, toolsRight, style, search, searchValue, searchDefaultValue, onSearch } = this.props;

        const ToolBarTSX = (
            <div className='ui-menu-interactions-toolsbar-tools' style={{ height: search ? '40px' : '60px' }}>
                {toolsLeft && toolsLeft.map((tool, index) => React.cloneElement(tool, { key: index }))}
            </div>
        )

        const SearchBarTSX = (style) => (
            <div className='ui-menu-interactions-toolsbar'>
                <div className='ui-menu-interactions-toolsbar-search' style={{ ...style.searchBar }}>
                    <input
                        value={searchValue}
                        defaultValue={searchDefaultValue}
                        onChange={(event) => {
                            this.setState({ searchField: event.target.value });
                            onSearch && onSearch(event.target.value);
                        }}
                    />
                    <span
                        className='ui-menu-interactions-toolsbar-search-icon'
                        onClick={() => this.props.onSearchSubmit && this.props.onSearchSubmit(this.state.searchField)}>
                        <Icon type='search' />
                    </span>
                </div>
                {ToolBarTSX}
            </div>
        )

        return (
            <Theme>
                {styles => (
                    <div className='ui-menu' style={{ ...styles.menu.main.menu, ...style }}>
                        {header && <div className={'ui-menu-header' + (search ? ' header-max' : '')}>
                            {!header.label ? header : <div className='ui-menu-header-title' onClick={header.onAction}>{header.label}</div>}
                        </div>}
                        <div className='ui-menu-interactions'>
                            {search && SearchBarTSX(styles.menu.main)}
                            {children && <div className={'ui-menu-interactions-navbar' + (search ? ' nav-min' : '')}>
                                {children}
                                {!search && ToolBarTSX}
                            </div>}
                        </div>
                        {toolsRight && <div className={'ui-menu-toolsbar' + (search ? ' bar-max' : '')}><div className='ui-menu-toolsbar-tools'>{toolsRight.map((tool, index) => React.cloneElement(tool, { key: index }))}</div></div>}
                    </div>
                )}
            </Theme>

        )
    }
}

export default Menu;
