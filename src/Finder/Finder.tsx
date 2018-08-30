import React, { CSSProperties } from 'react';
import FinderFilter from './FinderFilter';
import { Flexbox } from '../';

//TODO:
// - defaultValue
// - display current element
// - filter Section
// - filter Menu

interface FinderProps {
    filter?: boolean
    tip?: boolean
    filterPlaceholder?: string
    style?: CSSProperties
}

class Finder extends React.Component<FinderProps> {

    constructor(props) {
        super(props);
        this.setMenues = this.setMenues.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    state = {
        menues: [] as {
            index: string,
            filter: boolean
            filterValue: string
            filterPlaceholder: string
        }[],
        filterValue: '' as string
    }

    componentWillMount() {
        this.setMenues(0, 'root', this.props.filter, this.props.filterPlaceholder);
    }

    setMenues(level, index, filter, filterPlaceholder) {
        let menues = this.state.menues;
        menues[level] = {
            index: index,
            filter: filter,
            filterValue: '',
            filterPlaceholder: filterPlaceholder,
        };
        menues.length = level + 1;
        this.setState({ menues: menues });
    }

    onFilterChange(value, level) {
        let menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };

    filterChildren(children, filterValue) {
        if (children) {
            return children.filter(child => child.props.label && child.props.label.includes(filterValue))
        }
        return children
    }

    passFinderProps(children, level) {
        let counter = 0;
        return React.Children.map(children, (child: any) => {
            return React.cloneElement(child as React.ReactElement<any>, { setMenu: this.setMenues, level: level, index: level + '.' + counter++ })
        });
    }

    getCurrentChildren(children, menu, level) {
        let currentChildren = children;

        for (let i = 1; i <= level; i++) {
            console.log(currentChildren, this.state.menues[i].index);
            currentChildren = this.passFinderProps(React.Children.map(currentChildren, (child: any) => {
                if (child.props.index === this.state.menues[i].index) return child.props.children
            }), i);
        }

        return this.filterChildren(currentChildren, menu.filterValue);
    }

    render() {

        const { style } = this.props;

        const children = this.passFinderProps(this.props.children, 0);

        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <Flexbox column className='ui-finder-menu' key={index}>
                    {menu.filter && <FinderFilter level={index} onChange={this.onFilterChange} placeholder={menu.filterPlaceholder} />}
                    <Flexbox column className='ui-finder-menu-items'>
                        {this.getCurrentChildren(children, menu, index)}
                    </Flexbox>
                </Flexbox>
            ))
        );

        return (
            <Flexbox style={style} inline={true} className='ui-finder'>
                {MenuesTSX}
            </Flexbox>
        )
    }
}

export default Finder;