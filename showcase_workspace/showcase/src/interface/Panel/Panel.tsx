import * as React from "react";
import MenuItem from './MenuItem';

interface PanelProps {
  extentions: any
}

class Panel extends React.Component<PanelProps> {

  state = {
    position: 'showcase-panel-down',
    currentItem: ''
  }

  chagneItem

  createItems(items) {
    return Object.keys(items).map(item => {

    })
  }

  render() {

    const extention = null;
    const tools = null;
    const items = {};

    return (
      <div className={this.state.position}>
        <div className='showcase-panel-menu'>
          <div className='showcase-panel-menu-items'>{this.createItems(items)}</div>
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