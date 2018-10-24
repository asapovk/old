
import React from 'react';
import { Tabs, Tab } from '../../src';

export default class Story extends React.Component {
    render() {
        return (
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
        )
    }
}