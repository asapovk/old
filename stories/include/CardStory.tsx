import React, { Fragment } from 'react';
import { Flexbox } from '../../src/Flexbox';
import { Card } from '../../src/Card';

export default () => {
    return (
        <Flexbox justifyContent="space-between" p={40} mt={-40}>
            <Card
                title="Договоры"
                subtitle="Нет активных услуг"
                key="contracts" action={{
                    label: "Консоль",
                    onAction: () => console.log(1)
                }}
                info={{
                    value: '200 ₽',
                    description: "К оплате"
                }}
            />
        </Flexbox>
    )
}