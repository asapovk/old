import React from 'react';
import { Flexbox, StickyTabs, Icon, C1, C3 } from '../../../src';
import { StickyTabsTypes } from '../../../src/core/types';

class TabsStory extends React.Component {

    render() {
        const tabs: StickyTabsTypes.Tab[] = [
            {
                key: 'profile',
                title: (
                    <Flexbox column>
                        <C1 children='Профиль' />
                        <C3 color='lowlight' children='Ваш профиль' />
                    </Flexbox>
                ),
                content: <div style={{ height: 200 }}>Профиль</div>,
                icon: 'smorodina'
            },
            {
                key: 'accounts',
                title: (
                    <Flexbox column>
                        <C1 children='Лицевые счета' />
                        <C3 color='lowlight' children='Ваши лицевые счета' />
                    </Flexbox>
                ),
                content: <div style={{ height: 200 }}>Лицевые счета</div>,
                icon: 'counter'
            },
            {
                key: 'payinfo',
                title: (
                    <Flexbox column>
                        <C1 children='Платежная информация' />
                        <C3 color='lowlight' children='Ваша платежная информация' />
                    </Flexbox>
                ),
                content: <div style={{ height: 200 }}>Платежная информация</div>,
                icon: 'settings'
            },
            {
                key: 'notifications',
                title: (
                    <Flexbox column>
                        <C1 children='Уведомления' />
                        <C3 color='lowlight' children='Ваши уведомления' />
                    </Flexbox>
                ),
                content: <div style={{ height: 200 }}>Уведомления</div>,
                icon: 'photo'
            }
        ]
        return (
            <Flexbox p={50} column flex={1}>
                <div style={{ height: '100px', width: '100%' }}></div>
                <StickyTabs tabs={tabs} />
            </Flexbox>
        )
    }
}

export default TabsStory