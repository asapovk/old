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
        const { active, onClick, theme } = this.props;
        return (
            <div
                className="ui-menu-nav"
                onClick={onClick}
                style={{
                    color: active ? theme.textColorActive : theme.textColor
                }}
            >{this.props.children}{active && <span style={{ backgroundColor: theme.textColorActive }} />}</div>
        )
    }
}

export default (props: Props) => (
    <Theme>
        {theme => (
            <MenuNav {...props} theme={{
                textColor: theme.text,
                textColorActive: theme.highlight,
            }} />
        )}
    </Theme>
);
