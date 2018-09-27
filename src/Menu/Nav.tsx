import React, { Component } from 'react';
import Theme from '../Themes';

interface Props {
    active?: boolean
    onClick?: () => void
    children?: any
}

class MenuNav extends Component<Props> {

    render() {
        const { active, onClick } = this.props;
        return (
            <Theme>
                {styles => (
                    <div
                        className="ui-menu-nav"
                        onClick={onClick}
                        style={{
                            color: active ? styles.menu.nav.textColorActive : styles.menu.nav.textColor
                        }}
                    >{this.props.children}{active && <span style={{ backgroundColor: styles.menu.nav.textColorActive }} />}</div>
                )}
            </Theme>
        )
    }
}

export default MenuNav;