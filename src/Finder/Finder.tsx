import React from 'react';
import FinderFilter from './FinderFilter';


interface FinderProps {
    filter?: boolean;
    tip?: boolean;
}

class Finder extends React.Component<FinderProps> {

    constructor(props) {
        super(props);
        this.submenu = this.submenu.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    state = {
        submenu: [] as any[],
        filteredSubmenu: [] as any[],
    }

    passProps(children, level) {
        return React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { render: this.submenu, level: level })
        );
    }

    filterChange(value, level) {
        let filteredSubmenu = Object.assign(this.state.submenu);
        if (value != '') {
            filteredSubmenu[level].childrens = filteredSubmenu[level].childrens.filter(
                child => child.props.label.includes(value)
            );
            //console.log(value != '');
        }
        //console.log(value == '' ? this.state.submenu : 'filtered');
        this.setState({ filteredSubmenu: filteredSubmenu });
    };

    submenu(children, filter, level) {
        const childrenWithProps = this.passProps(children, level);
        let submenu = this.state.submenu;
        submenu[level] = { childrens: childrenWithProps, filter: filter };
        submenu.length = level + 1;
        this.setState({ submenu: submenu, filteredSubmenu: submenu });
    }

    render() {

        const { filter, children } = this.props;
        const childrenWithProps = this.passProps(children, -1);

        const SubmenuTSX = (
            this.state.filteredSubmenu.map((menu, index) => (
                <div className='ui-finder-submenu' key={index}>
                    {filter && <FinderFilter level={index} filterChange={this.filterChange} />}
                    <div className='ui-finder-menu-items'>{menu.childrens}</div>
                </div>
            ))
        )

        return (
            <div className='ui-finder'>
                <div className='ui-finder-menu'>
                    {filter && <FinderFilter level={-1} />}
                    <div className='ui-finder-menu-items'>{childrenWithProps}</div>
                </div>
                {SubmenuTSX}
            </div>
        )

    }
}

export default Finder;