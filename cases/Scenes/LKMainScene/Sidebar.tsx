/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React, { useState, useEffect, useRef } from 'react';
import { Card, Flexbox, Stories, Button } from '../../../src';
import createStyles from './styles';

const Sidebar = (props: any) => {

    const accounts = [
        { label: '1000001433', value: 1 },
        { label: '1000001459', value: 2 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 },
        { label: '95285-F', value: 3 }
    ];

    const activeRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    let containerTop;

    if (containerRef.current) {
        containerTop = containerRef.current!.getBoundingClientRect().top
    }

    const [activeID, setActiveID] = useState(0);
    const [activePosition, setActivePosition] = useState<string | null>(null);

    function setWhereActiveIs() {
        if (activeRef) {
            const coord = activeRef.current!.getBoundingClientRect();
            if (coord.top < containerTop) {
                setActivePosition('top')
            } else if (coord.bottom > window.innerHeight - 10) {
                setActivePosition('bottom');
            } else if (activePosition) {
                setActivePosition(null)
            }
        }
    }

    useEffect(() => {
        window.addEventListener('mousewheel', setWhereActiveIs);
        window.addEventListener('touchmove', setWhereActiveIs);
        return () => {
            window.removeEventListener('mousewheel', setWhereActiveIs);
            window.removeEventListener('touchmove', setWhereActiveIs);
        }
    })

    console.log(activePosition);

    let ActiveCard;

    const Cards = accounts.map((account, index) => {
        const current = <Card
            animation={index % 2 ? 'circles' : 'waves'}
            active={activeID === index}
            ref={activeID === index ? activeRef : undefined}
            onClick={() => {
                setActiveID(index)
                setWhereActiveIs()
            }}
            key={index}
            css={css({
                margin: activeID === index
                    ? '0 0.625rem 1.25rem 0.625rem'
                    : '0 1.25rem 1.25rem 1.25rem'
            })}
        />
        if (activeID === index) {
            ActiveCard = current;
        }
        return current
    })

    return (
        <Flexbox flexDirection='column' ref={containerRef}>
            {Cards}
            <Button
                label='Изменить лицевые счета'
                css={css({
                    margin: '0 1.25rem 1.25rem 1.25rem'
                })}
                decoration='inverse'
                size='large'
                thin={true}
            />
            {
                activePosition
                && <div css={css({
                    position: 'fixed',
                    zIndex: 4,
                    width: 320
                },
                    activePosition === 'top'
                        ? {
                            top: 83
                        }
                        : {
                            bottom: 20
                        }
                )}>
                    {ActiveCard}
                </div>
            }
        </Flexbox>
    )
}

export default Sidebar;


// const clone = activeRef.current!.cloneNode(true);
// const wrapper = document.createElement('div');
// wrapper.style.cssText = 'position: fixed;top: 20px;width:320px'
// wrapper.appendChild(clone);
// containerRef.current!.appendChild(wrapper);

// const StoriesTSX = (
//     <Stories title='Рекомендации' stories={[{
//         label: 'Кукушка пробила голову андрею',
//         image: 'http://storage.onbird.ru/bird/photo/gluhaya-kukushka/gluhaya-kukushka%20foto%201%20%28onbird.ru%29.jpg',
//         labelColor: '#e1f1cb',
//         onClick: () => { },
//         read: false,
//         slides: [{
//             image: 'http://www.guten.my1.ru/_ld/2/74962800.jpg',
//             text: 'Это лев',
//             key: 'lev'
//         }, {
//             image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
//             text: 'Полетели!',
//             key: 'poletelix'
//         }]
//     }, {
//         label: 'МихаЕль -- дерево без границ',
//         image: 'https://www.taigatree.ru/wp-content/uploads/2016/05/5.jpg',
//         labelColor: '#ffffff',
//         onClick: () => { },
//         read: false,
//         slides: [{
//             image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
//             text: 'Полетели!',
//             key: 'poleteli'
//         }, {
//             image: 'http://2.bp.blogspot.com/-3wsVAFGLs3c/UF_SRKZ-HhI/AAAAAAAAC74/MHoqfOauMmk/s640/Man+in+the+Moon+tag+~+lilac-n-lavender.jpg',
//             text: 'Просто текст с картинкой!',
//             key: 'text'
//         }, {
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3aCpaZ-a7mP2OX2FvGnOfrUQO9KWNNGiOkAY-kPEl1sT-2TRQ',
//             text: 'Бухнем!',
//             key: 'buhnem'
//         }]
//     }, {
//         label: 'Text of storieeeeEEE.',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTiciBxA-xkgNIzzgB96Z4VYzstyBrVbUkcH5P_U_j7Rlcew4KLA',
//         labelColor: '#000000',
//         onClick: () => { },
//         read: true,
//         slides: [{
//             image: 'http://pngimg.com/uploads/rockets/rockets_PNG13291.png',
//             text: 'Полетели!',
//             key: 'poleteli'
//         }, {
//             image: 'http://2.bp.blogspot.com/-3wsVAFGLs3c/UF_SRKZ-HhI/AAAAAAAAC74/MHoqfOauMmk/s640/Man+in+the+Moon+tag+~+lilac-n-lavender.jpg',
//             text: 'Просто текст с картинкой!',
//             key: 'text'
//         }, {
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsc3aCpaZ-a7mP2OX2FvGnOfrUQO9KWNNGiOkAY-kPEl1sT-2TRQ',
//             text: 'Бухнем!',
//             key: 'buhnem'
//         }]
//     }]} />
// )
