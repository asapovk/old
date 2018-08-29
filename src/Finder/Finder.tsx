import React, { CSSProperties } from 'react';
import FinderFilter from './FinderFilter';
import { Flexbox } from '../';

//TODO:
// - defaultValue
// - display current element
// - filter Section
// - filter Menu

interface FinderProps {
    filter?: boolean;
    tip?: boolean;
    filterPlaceholder?: string
    style?: CSSProperties
}

class Finder extends React.Component<FinderProps> {

    constructor(props) {
        super(props);
        this.setMenues = this.setMenues.bind(this);
        this.onChange = this.onChange.bind(this);
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

    findComponentByIndex(childs, index) {
        for (let i = 0; i < childs.length; i++) {
            let child = childs[i];
            if (!child.props || !child.props.index) {
                continue;
            }
            if (child.props.index === index) {
                return child.props.children;
            }
            let propsChild = child.props.children;
            if (child.props.children) {
                if (!Array.isArray(propsChild)) {
                    propsChild = [propsChild];
                }
                const result = this.findComponentByIndex([propsChild], index);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }

    passFinderProps(children, menu: any = null) {
        let level = 0;
        if (menu) {
            level = menu.level + 1;
            children = this.findComponentByIndex(children, menu.index);
        }
        let counter = 0;
        return React.Children.map(children, (child: any) => {
            if (child && child.type && child.type.prototype) {
                if (child.type.prototype.constructor.componentName === "FinderNav" || child.type.prototype.constructor.componentName === "FilterSection") {
                    return React.cloneElement(child as React.ReactElement<any>, { setMenu: this.setMenues, level, index: level + '.' + counter++ })
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

    onChange(value, level) {
        let menues = this.state.menues;
        menues[level].filterValue = value;
        this.setState({ menues: menues });
    };

    render() {

        const { filter, filterPlaceholder, style } = this.props;

        let children = this.passFinderProps(this.props.children);
        let subChildren = children;
        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <Flexbox column className='ui-finder-menu' key={index + 1}>
                    {menu.filter && <FinderFilter level={index + 1} onChange={this.onChange} placeholder={menu.filterPlaceholder} />}
                    <Flexbox column className='ui-finder-menu-items'>
                        {subChildren = this.passFinderProps(subChildren, menu)}
                    </Flexbox>
                </Flexbox>
            ))
        )

        return (
            <Flexbox style={style} inline={true} className='ui-finder'>
                <Flexbox column className='ui-finder-menu'>
                    {filter && <FinderFilter level={0} onChange={this.onChange} placeholder={filterPlaceholder} />}
                    <Flexbox column className='ui-finder-menu-items'>{children}</Flexbox>
                </Flexbox>
                {MenuesTSX}
            </Flexbox>
        )
    }
}

export default Finder;