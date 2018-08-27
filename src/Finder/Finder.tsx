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
            childrens: any
            filter: boolean
            filterValue: string
            filterPlaceholder: string
            updateChildren: () => void
        }[]
    }

    componentWillReceiveProps() {
        const menues = this.state.menues.map(menu => {
            menu.childrens = menu.updateChildren()
            return menu
        });
        console.log(menues);
        //this.setState({ menu: menues });
    }

    passFinderProps(children, level) {
        return React.Children.map(children, (child: any) => {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.name === "FinderNav" || child.type.prototype.constructor.name === "FilterSection") {
                    return React.cloneElement(child as React.ReactElement<any>, { render: this.setMenues, level: level })
                }
            } return child
        });
    }

    setMenues(children, filter, level, filterPlaceholder, updateChildren) {
        let menues = this.state.menues;
        menues[level] = {
            childrens: this.passFinderProps(children, level),
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
            updateChildren: updateChildren
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
                <div className='ui-finder-menu'>
                    {filter && <FinderFilter level={0} filterChange={this.filterChange} placeholder={filterPlaceholder} />}
                    {this.passFinderProps(this.props.children, -1)}
                </div>
                {MenuesTSX}
            </div>
        )

    }
}

export default Finder;