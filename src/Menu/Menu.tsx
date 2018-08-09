import React, { Component, Children } from 'react';

interface TableProps {
    search?: boolean
    toolsLeft?: {
        icon: any
        float: 'left' | 'right'
        onAction: () => void
    }[]
    toolsRight?: {
        icon: any
        float: 'left' | 'right'
        onAction: () => void
    }[]
    pin?: boolean
    Children?: any[]
}
class Menu extends React.Component<TableProps> {

    componentWillMount() {

    }

    render() {
        return (
            <div className='ui-menu'>
                {/* <div className='ui-menu-header'>{this.props.children.Header}</div> */}
                <div className='ui-menu-interactions'>
                    <div className='ui-menu-interactions-tools'>{this.props.toolsLeft}</div>
                    {/* <div className='ui-menu-interactions-nav'>{this.props.children.Nav}</div> */}
                </div>
                <div className='ui-menu-tools'>{this.props.toolsLeft}</div>
            </div>
        )
    }
}

export default Menu;