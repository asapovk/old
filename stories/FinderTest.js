import React, { Fragment } from 'react';
import { Checkbox, Viewport } from '../src';
import { Finder, FinderSection, FinderGroup } from '../src/Finder2';
import Fakerator from 'fakerator';

var fakerator = Fakerator();

const data = [];
for (let i = 0; i < 10; i++) {
    data.push({
        id: i + 1,
        name: fakerator.names.name(),
        age: fakerator.random.number(16, 50),
        passport: fakerator.random.hex(16),
    });
}

export default class FinderTest extends React.Component {
    constructor() {
        super();

        this.state = {
            checkedNames: []
        }
    }
    render() {
        return (
            <Viewport>
                <Finder filter>
                    <FinderSection label="Пользователь" filter badge={this.state.checkedNames.length}>
                        {data.map(item => (
                            <Checkbox key={item.id} label={item.name} style={{ margin: 2 }} checked={this.state.checkedNames.findIndex(id => item.id === id) >= 0} onChange={state => {
                                const checkedNames = this.state.checkedNames.filter(id => item.id != id);
                                if (state) {
                                    checkedNames.push(item.id);
                                }
                                this.setState({ checkedNames });
                            }} />
                        ))}

                    </FinderSection>
                    <FinderGroup label="Группа">
                        <FinderSection label="Тест 1">
                            <div>1-------</div>
                        </FinderSection>
                        <FinderSection label="Тест 2">
                            <div>2-------</div>
                        </FinderSection>
                        <FinderSection label="Тест 3">
                            <div>3-------</div>
                        </FinderSection>
                    </FinderGroup>
                    <FinderSection label="Адрес">
                        <FinderSection label="Район">
                            <div>4-------</div>
                        </FinderSection>
                        <FinderSection label="Город">
                            <div>5-------</div>
                        </FinderSection>
                        <FinderSection label="Улица">
                            <div>6-------</div>
                        </FinderSection>
                        <FinderSection label="Дом">
                            <div>7-------</div>
                        </FinderSection>
                        <FinderSection label="Квартира">
                            <div>8-------</div>
                        </FinderSection>
                    </FinderSection>
                </Finder>
            </Viewport>

        )
    }
}