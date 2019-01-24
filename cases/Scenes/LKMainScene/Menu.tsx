import React, { useState } from 'react';
import { Icon, Menu } from '../../../src';

const Menu$ = () => {
    const [active, onClick] = useState(0);
    const items = [
        { text: "Счет", value: 'ls' },
        { text: "История", value: 'hist' },
        { text: "Поставщики", value: 'suppliers' },
        { text: "Поддержка", value: 'support' }
    ]
    return (
        <Menu
            items={items}
            value='ls'
            tools={
                <Icon type="user" key={1} />
            }
        />
    )
}


export default Menu$;