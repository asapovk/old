import * as React from "react";
import './styles.css';

export default (props: any) => {
  window.addEventListener('mousedown', () => {
    props.render()
  })
}

interface PanelProps {
  extentions: any
}

class Panel extends React.Component<PanelProps> {

  render() {

    return (
      <div className='showcase-plugin-panel'></div>
    )
  }
}