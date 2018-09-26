
import { ThemeContext, themes, themeNames } from '../Themes';
import React, { Component, Fragment } from 'react';

interface ViewportProps extends themeNames {
    children?: any
    style?: any
    theme?
}
interface State {
    mountedActions: any[]
}
class Viewport extends Component<ViewportProps> {

    state: State = {
        mountedActions: []
    }

    componentDidMount() {
        //@ts-ignore
        document.__uiviewport = this;
    }
    /**
     * Добавляет компонент в viewport
     * возвращает индекс
     */
    public mountAction(component: any, id?: string, extra?: any) {
        const index = this.state.mountedActions.length;
        this.setState({
            mountedActions: this.state.mountedActions.concat([{ component, id, extra }])
        });
        return index;
    }
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    public unmountAction(index: number) {
        if (this.state.mountedActions[index]) {
            this.setState({
                mountedActions: this.state.mountedActions.filter((item, i) => i !== index)
            });
        }
    }
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    public getActionById(id: string) {
        return this.state.mountedActions.find(action => action.id === id) || null;
    }

    public get theme() {
        return themes[this.props.theme ? this.props.theme : 'blackCurrant']
    }

    render() {
        return (
            <ThemeContext.Provider value={this.theme}>
                <div data-viewport className='ui-view' id='0cd82567-7684-4147-ab02-dd3c56332364' style={{ ...this.props.style, ...{ background: this.theme.background.rgb, color: this.theme.text.rgb } }}>
                    {this.props.children}
                    {this.state.mountedActions.map((action, index) => {
                        return <Fragment key={index}>{action.component}</Fragment>
                    })}
                </div>
            </ThemeContext.Provider>
        )
    }
}

export default Viewport;