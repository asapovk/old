import React from 'react';
import { Flexbox, Tabs } from '../../../src';

const menuElements = [
    { title: 'Счет', value: 0 },
    { title: 'История', value: 1 },
    { title: 'Поддержка', value: 2 },
    { title: 'Настройки', value: 3 }
];

class TabsStory extends React.Component {
    render() {
        return (
            <Flexbox p={50} column flex={1}>
                <div style={{ height: '100px', width: '100%' }}></div>
                <Tabs menuItems={menuElements} activeMenuItem={0} />
            </Flexbox>
        )
    }
}

export default TabsStory