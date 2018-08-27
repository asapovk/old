import React from 'react';
import { Finder2, FinderNav2, FinderSection2 } from '../src';
import { Checkbox } from '../src';

import Fakerator from 'fakerator';

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

class Finder2Story extends React.Component {
    state = {
        checkedNames: [] as any
    }

    render() {
        return (
            <div>
                <Finder2 filter filterPlaceholder='search something'>
                    <FinderNav2 label="Пользователь" filter badge={this.state.checkedNames.length}>
                        {data.map(item => (
                            <Checkbox key={item.id} label={item.name} style={{ margin: 2 }} checked={this.state.checkedNames.findIndex(id => item.id === id) >= 0} onChange={state => {
                                const checkedNames = this.state.checkedNames.filter(id => item.id != id);
                                if (state) {
                                    checkedNames.push(item.id);
                                }
                                this.setState({ checkedNames });
                            }} />
                        ))}
                    </FinderNav2>
                    <FinderSection2 label='And other numbers'>
                        <FinderNav2 label='Ten'>
                            <div>21</div>
                        </FinderNav2>
                        <FinderNav2 label='Eleven'>
                            <div>33</div>
                        </FinderNav2>
                    </FinderSection2>
                    <FinderNav2 label='Fruits' filter filterPlaceholder='choose your fruit'>
                        <FinderNav2 label='Apples'>
                            <FinderNav2 label='Macintosh'></FinderNav2>
                            <FinderNav2 label='Granny Smith'></FinderNav2>
                            <FinderNav2 label='Honeycrisp'></FinderNav2>
                        </FinderNav2>
                        <FinderNav2 label='Pears'>
                            <FinderNav2 label='Anjou'></FinderNav2>
                            <FinderNav2 label='Bartlett'></FinderNav2>
                        </FinderNav2>
                    </FinderNav2>
                    <FinderNav2 label='Three'>
                        <div>12345</div>
                    </FinderNav2>
                </Finder2>
            </div>
        )
    }
}

export default Finder2Story