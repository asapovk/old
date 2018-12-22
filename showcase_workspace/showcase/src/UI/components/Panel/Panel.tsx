import * as React from "react";
import MenuItem from './MenuItem';
import '../../styles/panel.css'

interface PanelItem {
  id: string
  name: string,
  render: React.SFC<{}>
}

interface PanelProps {
  items: PanelItem[],
  tools: React.SFC<{}>[]
}

class Panel extends React.Component<PanelProps> {

  state = {
    isPanelOnTop: false as boolean,
    activePluginID: null as null | string
  }

  constructor(props) {
    super(props);
    this.changeActivePlugin = this.changeActivePlugin.bind(this);
  }

  componentWillMount() {
    let isUp = localStorage.getItem('isPanelOnTop');
    this.setState({
      isPanelOnTop: isUp && (/true/i).test(isUp)
    })
  }

  createMenu(items: PanelItem[]) {
    if (!items.length) return null
    return items.map(item => (
      <MenuItem
        key={item.id}
        active={this.state.activePluginID === item.id}
        onChoose={this.changeActivePlugin}
        label={item.name}
        id={item.id}
      />
    ))
  }

  createToolbar(tools: React.SFC<{}>[]) {
    if (!tools.length) return null
    return tools.map(Tool => (
      <div
        className='showcase-panel-menu-toolbar-item'
        key={Math.random()}
      >
        <Tool />
      </div>
    ))
  }

  getBody() {
    return null;
  }

  changeActivePlugin(pluginID) {
    this.setState({
      activePluginID: pluginID
    })
  }

  movePanel() {
    const next = !this.state.isPanelOnTop;
    localStorage.setItem('isPanelOnTop', next.toString());
    this.setState({ isPanelOnTop: next });
  }

  render() {

    const { items, tools } = this.props;

    let className = 'showcase-panel';
    if (this.state.isPanelOnTop) className += ' showcase-panel-up';
    else className += ' showcase-panel-down';


    return (
      <div className={className}>
        <div className='showcase-panel-menu'>
          <div className='showcase-panel-menu-items'>
            {this.createMenu(items)}
          </div>
          <div className='showcase-panel-menu-toolbar'>
            {this.createToolbar(tools)}
            <div
              className='showcase-panel-menu-toolbar-item'
              onClick={() => this.movePanel()}
            >{this.state.isPanelOnTop ? '[↓]' : '[↑]'}</div>
          </div>
        </div>
        <div className='showcase-panel-body'>{this.getBody()}</div>
      </div>
    )
  }
}

export default Panel