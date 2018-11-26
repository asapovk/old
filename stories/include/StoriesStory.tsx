import React from 'react';
import { Flexbox, Stories } from '../../src';

export default () => {
    return (
        <Flexbox>
            <Stories title='Рекомендуем' stories={[{
                label: 'Лень передавать показания?',
                image: 'https://ars.els-cdn.com/content/image/X18755100.jpg',
                labelColor: '#fff',
                read: false
            }, {
                label: 'Вам кажется кто-то крадет ваш газ?',
                image: 'https://ars.els-cdn.com/content/image/X18755100.jpg',
                labelColor: '#fff',
                read: true
            }, {
                label: 'Трали-вали',
                image: 'https://ars.els-cdn.com/content/image/X18755100.jpg',
                labelColor: '#fff',
                read: true
            }]} />
        </Flexbox>
    )
}