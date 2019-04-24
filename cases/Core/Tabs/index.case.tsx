import React from 'react';
import { Flexbox, Tabs } from '../../../src';

const menuElements = [
    { title: 'Счет', path: "/", },
    { title: 'История', path: "/", },
    { title: 'Поддержка', path: "/", },
    { title: 'Настройки', path: "/", }
];

class TabsStory extends React.Component {
    render() {
        return (
            <Flexbox p={50} column flex={1}>
                <div style={{ height: '100px', width: '100%' }}></div>
                <Tabs items={menuElements} activeItem={0} />
            </Flexbox>
        )
    }
}

export default TabsStory