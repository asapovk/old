import React, { Component, Children } from 'react';

interface TableProps {
    search?: boolean
    tools?: {
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
                <div className='menu'>
                    <div className='nav'>{this.props.children}</div>
                    <button className='add' onClick={_ => AppActions.menuActions.add()}><Icon type='add' /></button>
                </div>
            </div>
        )
    }
}

export default Menu;