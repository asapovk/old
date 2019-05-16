import React from 'react';
import { Flexbox, Finder, FinderNav, FinderSection, Checkbox, DatePicker } from '../../../src';
import Fakerator from 'fakerator';
import '../../../src/styles/scss/main.scss';

var fakerator = Fakerator();

const data = [] as any;

for (let i = 0; i < 10; i++) {
    data.push({
        id: i + 1,
        name: fakerator.names.name(),
        age: fakerator.random.number(16, 50),
        passport: fakerator.random.hex(16),
    });
}

class FinderStory extends React.Component {
    state = {
        checkedNames: [] as any
    }
    render() {
        return (
            
                <Flexbox alignContent="center" justifyContent="center">
                    <Finder filter filterPlaceholder='search something'>
                        <FinderNav label="Пользователь" filter badge={this.state.checkedNames.length}>
                            {data.map(item => (
                                <Checkbox key={item.id} label={item.name} style={{ margin: 2 }} checked={this.state.checkedNames.findIndex(id => item.id === id) >= 0} onChange={state => {
                                    const checkedNames = this.state.checkedNames.filter(id => item.id != id);
                                    if (state) {
                                        checkedNames.push(item.id);
                                    }
                                    this.setState({ checkedNames });
                                }} />
                            ))}
                        </FinderNav>
                        <FinderSection label='And other numbers'>
                            <FinderNav label='Ten'>
                                <div>21</div>
                            </FinderNav>
                            <FinderNav label='Eleven'>
                                <div>33</div>
                            </FinderNav>
                        </FinderSection>
                        <FinderNav label='Fruits' filter filterPlaceholder='choose your fruit'>
                            <FinderNav label='Apples'>
                                <FinderNav label='Macintosh'></FinderNav>
                                <FinderNav label='Granny Smith'></FinderNav>
                                <FinderNav label='Honeycrisp'></FinderNav>
                            </FinderNav>
                            <FinderNav label='Pears'>
                                <FinderNav label='Anjou'></FinderNav>
                                <FinderNav label='Bartlett'></FinderNav>
                            </FinderNav>
                        </FinderNav>
                        <FinderNav label='Date'>
                            <DatePicker />
                        </FinderNav>
                    </Finder>
                </Flexbox>
            
        )
    }
}

export default FinderStory