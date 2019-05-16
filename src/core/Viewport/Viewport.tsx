/** @jsx jsx */
import { css, Global, jsx } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { Component, Fragment } from 'react';
import { createStyles, StylesContext } from '../../styles';

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

        const mainStyle = {
            background: uiStyles.theme.background.rgb,
            color: uiStyles.theme.text.rgb
        };

        const fitStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            // overflow: 'auto'
        };

        return (
            <StylesContext.Provider value={uiStyles}>
                <ThemeProvider theme={uiStyles.theme}>
                    <div
                        data-viewport
                        id='0cd82567-7684-4147-ab02-dd3c56332364'
                        className='ui-viewport'
                        css={this.props.transparent
                            ? css({ ...this.props.style, ...mainStyle })
                            : css({ ...mainStyle, ...fitStyle, ...this.props.style })}
                        children={(
                            <Fragment>
                                {this.props.children}
                                {this.state.mountedActions.map((action, index) => (
                                    <Fragment key={index}>{action.component}</Fragment>
                                ))}
                                <Global
                                    styles={css`
                                        input {
                                            :-webkit-autofill,
                                            :-webkit-autofill:hover,
                                            :-webkit-autofill:focus,
                                            :-webkit-autofill:active {
                                                transition: background-color 999999s ease-in-out 0s;
                                                background: rgba(0, 0, 0, 0.0);
                                            }
                                        }
                                    `}
                                />
                            </Fragment>
                        )}
                    />
                </ThemeProvider>
            </StylesContext.Provider>
        )
    }
}

export default Viewport;