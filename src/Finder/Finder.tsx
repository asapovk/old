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
    }

    state = {
        submenu: [] as any[],
    }

    passProps(children, level) {
        return React.Children.map(children, child =>
            React.cloneElement(child as React.ReactElement<any>, { render: this.submenu, level: level })
        );
    }

    submenu(children, filter, level) {
        const SubmenuTSX = children && (
            <div className='ui-finder-submenu'>
                {filter && <FinderFilter />}
                <div className='ui-finder-menu-items'>{this.passProps(children, level)}</div>
            </div>
        )
        let submenu = this.state.submenu;
        submenu[level] = SubmenuTSX;
        submenu.length = level + 1;
        this.setState({ submenu: submenu });
    }

    render() {

        const { filter, children } = this.props;
        const childrenWithProps = this.passProps(children, -1);

        const SubmenuTSX = (
            this.state.submenu.map((menu, index) => <menu key={index} />)
        )

        return (
            <div className='ui-finder'>
                <div className='ui-finder-menu'>
                    {filter && <FinderFilter />}
                    <div className='ui-finder-menu-items'>{childrenWithProps}</div>
                </div>
                {SubmenuTSX}
            </div>
        )

    }
}

export default Finder;