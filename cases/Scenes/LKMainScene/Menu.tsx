import React, { useState } from 'react';
import { Icon, Menu } from '../../../src';

const Menu$ = () => {
    const [active, onClick] = useState(0);

    return (
        <Menu
            items={{
                active,
                onClick,
                list: [{ label: "Лицевой счет" }, { label: "Документы" }, { label: "Карта отделений" }, { label: "Поддержка" }]
            }}
            toolsRight={[
                <Icon type="settings" size={2} />
            ]}
        />
    )
}


export default Menu$;