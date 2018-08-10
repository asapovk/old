import React, { Component } from 'react';

interface MenuNavProps {
    active?: boolean
}
class MenuNav extends React.Component<MenuNavProps> {

    render() {
        const { active } = this.props;

        let classes = 'ui-menu-nav'

        if (active) classes += ' nav-active'

        return <div className={classes}>{this.props.children}{active && <span />}</div>
    }
}

export default MenuNav