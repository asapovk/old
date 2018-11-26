import React from 'react';
import { Flexbox, Card } from '../../..';
import { useMainContext } from '..';

export default () => {
    const ctx = useMainContext();
    const { currentMenuItem, currentSubMenuItem, setCurrentSubMenu } = ctx;

    return (
        <Flexbox flexDirection='column' flex={1}>
            {currentMenuItem.submenuItems.map((item, index) => (
                <Flexbox pt={index === 0 ? 0 : '1.25rem'} key={item.key}>
                    <Card
                        title={item.card.title}
                        onClick={() => setCurrentSubMenu(item)}
                        subtitle={item.card.subtitle}
                        action={item.card.action}
                        info={item.card.info}
                        active={(item.key === currentSubMenuItem.key)}
                    />
                </Flexbox>
            ))}
        </Flexbox>
    )
}