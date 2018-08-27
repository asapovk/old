import React from 'react';
import { Finder2, FinderNav2, FinderGroup2 } from '../src';
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
                    <FinderNav2 label='Three'></FinderNav2>
                    <FinderNav2 label='Four'></FinderNav2>
                    <FinderNav2 label='Five'></FinderNav2>
                    <FinderNav2 label='Six'></FinderNav2>
                    <FinderNav2 label='Seven'></FinderNav2>
                    <FinderNav2 label='Eight'></FinderNav2>
                    <FinderNav2 label='Nine'></FinderNav2>
                    <FinderNav2 label='Ten'></FinderNav2>
                    <FinderGroup2 label='And other numbers'>
                        <FinderNav2 label='Ten'><div>2</div></FinderNav2>
                        <FinderNav2 label='Eleven'><div>3</div></FinderNav2>
                        <FinderNav2 label='Twelve'><div>4</div></FinderNav2>
                        <FinderNav2 label='Thirteen'><div>5</div></FinderNav2>
                    </FinderGroup2>
                </Finder2>
            </div>
        )
    }
}

export default Finder2Story