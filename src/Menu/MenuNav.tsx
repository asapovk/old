import React, { Component } from 'react';

interface MenuNavProps {
    active?: boolean
    onClick?: () => void
}
class MenuNav extends React.Component<MenuNavProps> {

    render() {
        const { active, onClick } = this.props;

        let classes = 'ui-menu-nav'

        if (active) classes += ' nav-active'

        return <div className={classes} onClick={onClick}>{this.props.children}{active && <span />}</div>
    }
}

export default MenuNav