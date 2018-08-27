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
        this.setMenues = this.setMenues.bind(this);
        this.filterChange = this.filterChange.bind(this);
    }

    state = {
        menues: [] as {
            filter: boolean
            filterValue: string
            filterPlaceholder: string
            getChildren: () => void,
            level: number
            index: number
        }[]
    }

    passFinderProps(children, level) {
        let counter = 0;
        return React.Children.map(children, (child: any) => {
            counter = counter + 1;
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.name === "FinderNav" || child.type.prototype.constructor.name === "FilterSection") {
                    return React.cloneElement(child as React.ReactElement<any>, { setMenu: this.setMenues, level: level, index: counter })
                }
            } return child
        });
    }

    setMenues(filter, level, filterPlaceholder, getChildren, index) {
        let menues = this.state.menues;
        menues[level] = {
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
            getChildren: getChildren,
            level: level,
            index: index
        };
        menues.length = level + 1;
        this.setState({ menu: menues });
    }

    filterChange(value, level) {
        let menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };

    render() {

        const { filter, filterPlaceholder } = this.props;

        let children = this.passFinderProps(this.props.children, -1);

        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <div className='ui-finder-menu' key={index}>
                    {menu.filter && <FinderFilter level={index} filterChange={this.filterChange} placeholder={menu.filterPlaceholder} />}
                    <div className='ui-finder-menu-items'>{this.passFinderProps(children.find(child => child.props.index == menu.index).props.children, menu.level)}</div>
                </div>
            ))
        )

        return (
            <div className='ui-finder'>
                <div className='ui-finder-menu'>
                    {filter && <FinderFilter level={0} filterChange={this.filterChange} placeholder={filterPlaceholder} />}
                    {children}
                </div>
                {MenuesTSX}
            </div>
        )

    }
}

export default Finder;