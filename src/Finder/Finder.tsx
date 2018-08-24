import React from 'react';
import FinderFilter from './FinderFilter';

//TODO:
// - defaultValue
// - display current element
// - filter Section
// - filter Menu

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
        menues: [] as {
            childrens: any
            filter: boolean
            filterValue: string
            filterPlaceholder: string
        }[]
    }

    componentWillMount() {
        const childrenWithProps = this.passProps(this.props.children, 0);
        const menues = [{ childrens: childrenWithProps, filter: this.props.filter, filterValue: '', filterPlaceholder: this.props.filterPlaceholder }]
        this.setState({ menues: menues });
    }

    passProps(children, level) {
        return React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { render: this.submenu, level: level })
        );
    }

    filterChange(value, level) {
        let menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };

    submenu(children, filter, level, filterPlaceholder) {
        const childrenWithProps = this.passProps(children, level);
        let menues = this.state.menues;
        menues[level] = { childrens: childrenWithProps, filter: filter, filterValue: '', filterPlaceholder: filterPlaceholder };
        menues.length = level + 1;
        this.setState({ menu: menues });
    }

    render() {

        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <div className='ui-finder-menu' key={index}>
                    {menu.filter && <FinderFilter level={index} filterChange={this.filterChange} placeholder={menu.filterPlaceholder} />}
                    <div className='ui-finder-menu-items'>{menu.childrens && menu.childrens.filter(
                        child => child.props.label.includes(menu.filterValue)
                    )}</div>
                </div>
            ))
        )

        return (
            <div className='ui-finder'>
                {MenuesTSX}
            </div>
        )

    }
}

export default Finder;