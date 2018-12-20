import * as React from "react";
import MenuItem from './MenuItem';

interface PanelItem {
  id: string
  name: string,
  render: React.ReactNode
}

interface PanelProps {
  items?: PanelItem[],
  tools?: React.ReactNode[]
}

class Panel extends React.Component<PanelProps> {

  state = {
    isUp: false,
    currentItemID: ''
  }

  constructor(props) {
    super(props);
    this.changeItem = this.changeItem.bind(this);
  }

  changeItem(itemID) {
    this.setState({
      currentItemID: itemID
    })
  }

  createMenuItems(items: PanelItem[]) {
    if (!items.length) return null
    return items.map(item => (
      <MenuItem
        key={item.name}
        active={this.state.currentItemID === item.id}
        onChoose={this.changeItem}
        label={item.name}
        id={item.id}
      />
    ))
  }

  render() {

    const { items, tools } = this.props;
    let className = 'showcase-panel';
    if (this.state.isUp) className += ' showcase-panel-up';
    else className += ' showcase-panel-down';

    return (
      <div className={className}>
        <div className='showcase-panel-menu'>
          <div className='showcase-panel-menu-items'>
            {items && this.createMenuItems(items)}
          </div>
          <div className='showcase-panel-menu-toolbar'>
            {tools}
            <div className='showcase-panel-menu-toolbar-move'>↑</div>
          </div>
        </div>
        <div className='showcase-panel-extention'>{}</div>
      </div>
    )
  }
}

export default Panel