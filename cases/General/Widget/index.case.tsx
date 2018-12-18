import React, { Fragment } from 'react';
import { Viewport, Flexbox, Widget } from '../../../src';
import '../../../src/Styles/scss/main.scss';

class WidgetStory extends React.Component {
    state = {
        counter: 0
    }
    render() {
        return (
            <Viewport>
                <Flexbox alignContent="center" justifyContent="center" pr={30} pl={30}>
                    <Flexbox flex={1}>
                        <Flexbox p={10} flex={1}>
                            <Widget>Просто виджет</Widget>
                        </Flexbox>
                        <Flexbox p={10}>
                            <Widget loading={"Виджет с загрузкой"}></Widget>
                        </Flexbox>
                        <Flexbox p={10}>
                            <Widget title="Stat">Виджет с заголовком</Widget>
                        </Flexbox>
                        <Flexbox p={10}>
                            <Widget title="Виджет кнопка" onClick={_ => this.setState({ counter: this.state.counter + 1 })}>Нажали раз: {this.state.counter}</Widget>
                        </Flexbox>
                        <Flexbox p={10}>
                            <Widget title="1 004 491">
                                <div style={{ color: "rgba(0,0,0,0)" }}>
                                    Пользователей загеристрировано
                            </div>
                            </Widget>
                        </Flexbox>
                    </Flexbox>
                </Flexbox>
            </Viewport>
        )

    }
}

export default WidgetStory