import * as React from "react";
import MenuItem from './MenuItem';

interface PanelProps {
  menu: any,
  tools: any,
  extentions: any
}

class Panel extends React.Component<PanelProps> {

  state = {
    position: 'showcase-panel-down',
    currentItem: ''
  }

  changeItem(item) {
    this.setState({
      currentItem: item
    })
  }

  createMenuItems(items) {
    return Object.keys(items).map(item => (
      <MenuItem
        active={this.state.currentItem === item}
        onChoose={this.changeItem}
        label={item}
      />
    ))
  }

  render() {

    const { tools, menu, extentions } = this.props;
    const extention = this.state.currentItem ? extentions[this.state.currentItem] : null;

    return (
      <div className={this.state.position}>
        <div className='showcase-panel-menu'>
          <div className='showcase-panel-menu-items'>{this.createMenuItems(menu)}</div>
          <div className='showcase-panel-menu-toolbar'>
            {tools}
            <div>↑</div>
          </div>
        </div>
        <div className='showcase-panel-extention'>{extention}</div>
      </div>
    )
  }
}

export default Panel