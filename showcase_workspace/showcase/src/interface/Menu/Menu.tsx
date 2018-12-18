import * as React from "react";

export interface MenuProps {
  cases: any,
  onChange: (currentCase: React.ReactNode) => void
}

export default class Menu extends React.Component<MenuProps> {

  state = {
    currentCaseID: '' as string,
    currentCase: undefined as React.ReactNode,
    casesList: [] as any[]
  }

  createCasesList(cases) {
    return Object.keys(cases).map(name => {
      console.log(cases);
      if (cases[name].node) {
        return (
          <div
            className='showcase-menu-item'
            onClick={() => this.props.onChange(cases[name]['node'])}
            children={name}
          />
        )
      }
      else if (typeof cases[name] === 'object') return (
        <div className='showcase-menu-group'>
          <div className='showcase-menu-group-name'>{name}</div>
          {this.createCasesList(cases[name])}
        </div>
      );
      return null
    })
  }

  findCase = (cases: any, caseID: string) => {
    //return Object.keys(this.props.cases).find(item => )
  }

  render() {
    return (
      <div className='showcase-menu'>
        <h1>Menu</h1>
        {this.createCasesList(this.props.cases)}
      </div>
    )
  }
}