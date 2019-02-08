import React from 'react';
import { Flexbox, Tabs } from '../../../src';

class TabsStory extends React.Component {

    render() {
        const tabs = [
            { key: 'profile', title: 'Профиль', content: <div style={{ height: 500 }}>Профиль</div>, icon: '' },
            { key: 'accounts', title: 'Лицевые счета', content: <div style={{ height: 500 }}>Лицевые счета</div>, icon: '' },
            { key: 'payinfo', title: 'Платежная информация', content: <div style={{ height: 500 }}>Платежная информация</div>, icon: '' },
            { key: 'notifications', title: 'Уведомления', content: <div style={{ height: 500 }}>Уведомления</div>, icon: '' }
        ]
        return (
            <Flexbox p={50} column flex={1}>
                <div style={{ height: '200px', width: '100%' }}></div>
                <Tabs tabs={tabs} />
            </Flexbox>
        )
    }
}

export default TabsStory