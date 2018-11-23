import React, { Component } from 'react';
import { Styles } from '../';

interface Props {
    active?: boolean
    onClick?: () => void
    children?: any
}

class MenuNav extends Component<Props> {

    render() {
        const { active, onClick } = this.props;
        return (
            <Styles>
                {styles => (
                    <div
                        className="ui-menu-nav"
                        onClick={onClick}
                        style={{
                            color: active ? styles.menu.nav.textColorActive : styles.menu.nav.textColor
                        }}
                    >{this.props.children}{active && <span style={{ backgroundColor: styles.menu.nav.textColorActive }} />}</div>
                )}
            </Styles>
        )
    }
}

export default MenuNav;