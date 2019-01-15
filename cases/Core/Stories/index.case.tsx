import React from 'react';
import { Flexbox, Stories, Viewport } from '../../../src';
import '../../../src/Styles/scss/main.scss';

export default () => {
    return (
        <Flexbox>
            <Stories />
            {/* <Stories title='Рекомендуем' stories={[{
                    label: 'Лень передавать показания?',
                    image: 'http://jokesland.net/pic/1/eb30d9e46c.jpg',
                    labelColor: '#fff',
                    read: false,
                    slides: [{
                        image: 'http://www.guten.my1.ru/_ld/2/74962800.jpg',
                        text: 'Это лев',
                        key: 'lev'
                    }, {
                        image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                        text: 'Полетели!',
                        key: 'poletelix'
                    }]
                }, {
                    label: 'Вам кажется кто-то крадет ваш газ?',
                    image: 'http://4.bp.blogspot.com/-NETgWQAs3_Q/UIb2SwdMuHI/AAAAAAAACdg/UPoeg6HnIf0/s1600/0_695ea_e1f4c36a_orig.png',
                    labelColor: '#fff',
                    read: true,
                    slides: [{
                        image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
                        text: 'Полетели!',
                        key: 'poleteli'
                    }, {
                        image: 'http://2.bp.blogspot.com/-3wsVAFGLs3c/UF_SRKZ-HhI/AAAAAAAAC74/MHoqfOauMmk/s640/Man+in+the+Moon+tag+~+lilac-n-lavender.jpg',
                        text: 'Просто текст с картинкой!',
                        key: 'text'
                    }, {
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3aCpaZ-a7mP2OX2FvGnOfrUQO9KWNNGiOkAY-kPEl1sT-2TRQ',
                        text: 'Бухнем!',
                        key: 'buhnem'
                    }]
                }]} /> */}
        </Flexbox>

    )
}