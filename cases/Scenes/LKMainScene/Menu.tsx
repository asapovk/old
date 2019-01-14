import React, { useState } from 'react';
import { Icon, Menu } from '../../../src';

const Menu$ = () => {
    const [active, onClick] = useState(0);
    const items = [
        { text: "Лицевой счет", value: 'ls' },
        { text: "Документы", value: 'docs' },
        { text: "Карта отделений", value: 'map' },
        { text: "Поддержка", value: 'support' }
    ]
    return (
        <Menu
            items={items}
            tools={[
                <Icon type="settings" style={{ fontSize: '2rem' }} />
            ]}
        />
    )
}


export default Menu$;