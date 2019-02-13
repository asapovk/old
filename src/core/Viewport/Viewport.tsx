import { StylesContext, createStyles, themeName } from '../../styles';
import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming'

interface ViewportProps {
    children?: any
    style?: any
    theme?: string
    transparent?: true
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

    render() {
        const uiStyles = createStyles(this.props.theme);
        return (
            <StylesContext.Provider value={uiStyles}>
                <ThemeProvider theme={uiStyles}>
                    <div
                        data-viewport
                        className={this.props.transparent ? 'ui-viewport' : 'ui-viewport ui-viewport-fit'}
                        id='0cd82567-7684-4147-ab02-dd3c56332364'
                        style={this.props.transparent ? { ...this.props.style } : { ...uiStyles.viewport.main, ...this.props.style }}
                        children={(
                            <Fragment>
                                {this.props.children}
                                {this.state.mountedActions.map((action, index) => {
                                    return <Fragment key={index}>{action.component}</Fragment>
                                })}
                            </Fragment>
                        )}
                    />
                </ThemeProvider>
            </StylesContext.Provider>
        )
    }
}

export default Viewport;