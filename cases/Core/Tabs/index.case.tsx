import React from 'react';
import { Flexbox, Tabs } from '../../../src';
import { StickyTabsTypes } from '../../../src/core/types';

const menuElements = [
    { title: 'Счет' },
    { title: 'История' },
    { title: 'Поддержка' },
    { title: 'Настройки' }
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