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
        const menues = [{
            childrens: this.passFinderProps(this.props.children, 0),
            filter: this.props.filter, filterValue: '',
            filterPlaceholder: this.props.filterPlaceholder
        }]
        this.setState({ menues: menues });
    }

    passFinderProps(children, level) {
        return React.Children.map(children, (child: any) => {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.name === "FinderNav" || child.type.prototype.constructor.name === "FilterSection") {
                    return React.cloneElement(child as React.ReactElement<any>, { render: this.submenu, level: level })
                }
            } return child
        });
    }

    filterChange(value, level) {
        let menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };

    submenu(children, filter, level, filterPlaceholder) {
        let menues = this.state.menues;
        menues[level] = {
            childrens: this.passFinderProps(children, level),
            filter: filter, filterValue: '',
            filterPlaceholder: filterPlaceholder
        };
        menues.length = level + 1;
        this.setState({ menu: menues });
    }

    render() {

        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <div className='ui-finder-menu' key={index}>
                    {menu.filter && <FinderFilter level={index} filterChange={this.filterChange} placeholder={menu.filterPlaceholder} />}
                    <div className='ui-finder-menu-items'>{menu.childrens}</div>
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