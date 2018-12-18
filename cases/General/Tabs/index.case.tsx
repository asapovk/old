import React from 'react';
import { Tabs, Tab, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default class Story extends React.Component {
    render() {
        return (
            <Viewport>
                <div style={{ padding: "0 40px" }}>
                    <Tabs>
                        <Tab label="Добавление" icon="add">
                            <div>Разное</div>
                        </Tab>
                        <Tab label="Ожидание" icon="clock">
                            <div>Упс</div>
                        </Tab>
                        <Tab label="Выполеное" icon="check">
                            <div>...</div>
                        </Tab>
                    </Tabs>
                </div>
            </Viewport>
        )
    }
}