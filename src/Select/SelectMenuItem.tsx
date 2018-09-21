import React, { Children } from 'react';

interface SelectMenuItemProps {
    active?,
    onClick?: () => void,
    key?,
    children?,
    theme?
}
class SelectMenuItem extends React.Component<SelectMenuItemProps> {

    state = {
        background: 'none'
    }

    render() {
        const { children, active, theme, onClick } = this.props
        return (
            <div
                className={'ui-select-menu-item'}
                children={children}
                style={{
                    color: theme.text,
                    background: active ? theme.background : this.state.background
                }}
                onClick={() => onClick && onClick()}
                onMouseEnter={() => this.setState({ background: theme.background })}
                onMouseLeave={() => this.setState({ background: 'none' })}
            />
        )
    }
}

export default SelectMenuItem
