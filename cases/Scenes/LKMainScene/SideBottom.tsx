import React from 'react';
import { Stories } from '../../../src';

const SideBottom = (props: any) => {
    return (
        <Stories title="Рекомендации" stories={[{
            label: "Кукушка пробила голову андрею",
            image: "http://storage.onbird.ru/bird/photo/gluhaya-kukushka/gluhaya-kukushka%20foto%201%20%28onbird.ru%29.jpg",
            labelColor: "#e1f1cb",
            onClick: () => { },
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
            label: "МихаЕль -- дерево без границ",
            image: "https://www.taigatree.ru/wp-content/uploads/2016/05/5.jpg",
            labelColor: "#ffffff",
            onClick: () => { },
            read: false,
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
        }, {
            label: "Text of storieeeeEEE.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiciBxA-xkgNIzzgB96Z4VYzstyBrVbUkcH5P_U_j7Rlcew4KLA",
            labelColor: "#000000",
            onClick: () => { },
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
        }]} />
    )
}

export default SideBottom;