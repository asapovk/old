import React, { Component } from 'react';
import Theme from '../Themes';

interface Props {
    active?: boolean
    onClick?: () => void
    children?: any
}

export interface ThemedProps {
    theme
}
class MenuNav extends React.Component<Props & ThemedProps> {

    render() {
        const { active, onClick } = this.props;

        let classes = 'ui-menu-nav'

        if (active) classes += ' nav-active'

        return <div className={classes} onClick={onClick}>{this.props.children}{active && <span />}</div>
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <MenuNav {...props} theme={{

            }} />
        )}
    </Theme>
);
