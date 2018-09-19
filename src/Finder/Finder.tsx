import React, { CSSProperties } from 'react';
import FinderFilter from './FinderFilter';
import { Flexbox } from '../';
import Theme from '../Themes';

//TODO:
// - defaultValue
// - section

interface Props {
    filter?: boolean
    tip?: boolean
    filterPlaceholder?: string
    style?: CSSProperties
    children?: any
}
export interface ThemedProps {
    theme
}
class Finder extends React.Component<Props & ThemedProps> {

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
            return children.filter(child => child.props.label && child.props.label.toUpperCase().includes(filterValue.toUpperCase()))
        }
        return children
    }

    passProps(children, level) {
        let counter = 0;
        return React.Children.map(children, (child: any) => {
            let index = level + '.' + counter;
            let active = (this.state.menues.find(menu => menu.index == index));
            return React.cloneElement(child as React.ReactElement<any>, { setFinderMenu: this.setMenues, finderLevel: level, finderIndex: level + '.' + counter++, active: active })
        });
    }

    getCurrentChildren(children, filterValue, level) {
        let currentChildren = children;

        for (let i = 1; i <= level; i++) {
            currentChildren = this.passProps(
                React.Children.map(currentChildren, (child: any) => {
                    if (child.props.finderIndex === this.state.menues[i].index) return child.props.children
                }),
                i);
        }

        return this.filterChildren(currentChildren, filterValue);
    }

    render() {

        const { style, theme } = this.props;

        const children = this.passProps(this.props.children, 0);

        const MenuesTSX = (
            this.state.menues.map((menu, index) => (
                <Flexbox column className='ui-finder-menu' key={index} style={{
                    borderColor: theme.borderColor,
                }}>
                    {menu.filter && <FinderFilter level={index} onChange={this.onFilterChange} placeholder={menu.filterPlaceholder} />}
                    <Flexbox column className='ui-finder-menu-items'>
                        {this.getCurrentChildren(children, menu.filterValue, index)}
                    </Flexbox>
                </Flexbox>
            ))
        );

        return (
            <Flexbox style={{
                backgroundColor: theme.backgroundColor,
                borderColor: theme.borderColor,
                ...style
            }} inline={true} className='ui-finder'>
                {MenuesTSX}
            </Flexbox>
        )
    }
}


export default (props: Props) => (
    <Theme>
        {theme => (
            <Finder {...props} theme={{
                backgroundColor: theme.background,
                borderColor: theme.pale
            }} />
        )}
    </Theme>
);
