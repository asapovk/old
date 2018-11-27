import React from 'react';
import { Flexbox, Stories } from '../../src';

export default () => {
    return (
        <Flexbox>
            <Stories title='Рекомендуем' stories={[{
                label: 'Лень передавать показания?',
                image: 'https://ars.els-cdn.com/content/image/X18755100.jpg',
                labelColor: '#fff',
                read: false,
                slides: [{
                    image: 'http://www.guten.my1.ru/_ld/2/74962800.jpg',
                    text: 'Это лев'
                }, {
                    image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                    text: 'Полетели!'
                }]
            }, {
                label: 'Вам кажется кто-то крадет ваш газ?',
                image: 'https://ars.els-cdn.com/content/image/X18755100.jpg',
                labelColor: '#fff',
                read: true,
                slides: [{
                    image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                    text: 'Полетели!'
                }, {
                    image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                    text: 'Полетели!'
                }]
            }]} />
        </Flexbox>
    )
}