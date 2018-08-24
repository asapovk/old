import React from 'react';
import FinderFilter from './FinderFilter';


interface FinderProps {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string
}

class Finder extends React.Component<FinderProps> {

    constructor(props) {
        super(props);
        this.submenu = this.submenu.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    state = {
        submenu: [] as any[]
    }

    passProps(children, level) {
        return React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { render: this.submenu, level: level })
        );
    }

    filterChange(value, level) {
        let submenu = this.state.submenu;
        submenu[level].filterValue = value;
        this.setState({ submenu: submenu });
    };

    submenu(children, filter, level, filterPlaceholder) {
        const childrenWithProps = this.passProps(children, level);
        let submenu = this.state.submenu;
        submenu[level] = { childrens: childrenWithProps, filter: filter, filterValue: '', filterPlaceholder: filterPlaceholder };
        submenu.length = level + 1;
        this.setState({ submenu: submenu, filteredSubmenu: submenu });
    }

    render() {

        const { filter, children, filterPlaceholder } = this.props;
        const childrenWithProps = this.passProps(children, -1);

        const SubmenuTSX = (
            this.state.submenu.map((menu, index) => (
                <div className='ui-finder-submenu' key={index}>
                    {menu.filter && <FinderFilter level={index} filterChange={this.filterChange} placeholder={menu.filterPlaceholder} />}
                    <div className='ui-finder-menu-items'>{menu.childrens && menu.childrens.filter(
                        child => child.props.label.includes(menu.filterValue)
                    )}</div>
                </div>
            ))
        )

        return (
            <div className='ui-finder'>
                <div className='ui-finder-menu'>
                    {filter && <FinderFilter level={-1} placeholder={filterPlaceholder} />}
                    <div className='ui-finder-menu-items'>{childrenWithProps}</div>
                </div>
                {SubmenuTSX}
            </div>
        )

    }
}

export default Finder;