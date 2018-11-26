import React, { Fragment } from 'react';
import Scene, { IMenuItem } from '../../src/scenes/LKMainScene';
import useStyles from '../../src/hooks/useStyles';

export default () => {

    const styles = useStyles();

    const cards = [{
        key: 'payments',
        card: {
            title: 'Платежи',
            subtitle: '1 неоплаченная услуга',
            info: {
                value: '200 ₽',
                description: 'К оплате'
            },
            action: {
                label: 'Оплатить',
                onAction: () => { }
            }
        },
        component: <div>Платежи</div>
    },
    {
        key: 'counters',
        card: {
            title: 'Счетчики',
            subtitle: 'Обновлены 16 дней назад',
            info: {
                value: '5 м3',
                description: 'Передано'
            },
            action: {
                label: 'Передать',
                onAction: () => { }
            }
        },
        component: <div>Счетчики</div>
    },
    {
        key: 'charges',
        card: {
            title: 'Начисления',
            subtitle: 'Декабрь 2018',
            info: {
                value: '15 457 ₽',
                description: 'Сумма начислений'
            },
            action: {
                label: 'Квитанция',
                onAction: () => { }
            }
        },
        component: <div>Начисления</div>
    }]

    const cards2 = [{
        key: 'dogovori',
        card: {
            title: 'Договоры',
            subtitle: '1 неоплаченная услуга',
            action: {
                label: 'Заключить',
                onAction: () => { }
            }
        },
        component: <div>Договоры</div>
    },
    {
        key: 'requests',
        card: {
            title: 'Заявки',
            subtitle: 'Нет заявок',
            action: {
                label: 'Оформить',
                onAction: () => { }
            }
        },
        component: <div>Заявки</div>
    }]

    const menuItems: IMenuItem[] = [{
        title: 'Лицевой счет',
        key: 'account',
        submenuItems: cards
    },
    {
        title: 'Документы',
        key: 'documents',
        submenuItems: cards2
    }]

    return (
        <Scene menuItems={menuItems} />
    )
}