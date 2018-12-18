import * as React from "react";

export interface MenuProps {
  cases: any,
  onChange: (currentCase: React.ReactNode) => void
}

export default class Menu extends React.Component<MenuProps> {

  casesList(cases) {
    return Object.keys(cases).map(name => {
      if (typeof cases[name] === 'object') {
        if (cases[name].node) {
          return (
            <div
              key={name}
              className='showcase-menu-content-item'
              onClick={() => this.props.onChange(cases[name]['node'])}
              children={name}
            />
          )
        }
        return (
          <div key={name} className='showcase-menu-content-group'>
            <div className='showcase-menu-content-group-name'>{name}</div>
            {this.casesList(cases[name])}
          </div>
        );
      }
      return null
    })
  }

  render() {
    return (
      <div className='showcase-menu'>
        <h1>Menu</h1>
        <div className='showcase-menu-content'>
          {this.casesList(this.props.cases)}
        </div>
      </div>
    )
  }
}