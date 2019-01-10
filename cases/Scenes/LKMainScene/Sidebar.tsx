/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { Card, Flexbox, Stories } from '../../../src';
import createStyles from './styles';

const Sidebar = (props: any) => {

    const accounts = [
        { label: "1000001433", value: 1 },
        { label: "1000001459", value: 2 },
        { label: "95285-F", value: 3 }
    ];

    const [activeID, setActiveID] = useState(0);
    const styles = createStyles();

    return (
        <Flexbox flexDirection='column'>
            <div css={styles.cards}>
                <div css={styles.cardsBorderTop} />
                {accounts.map((account, index) =>
                    <Card
                        animation={index % 2 ? "circles" : "waves"}
                        active={activeID === index}
                        onClick={() => setActiveID(index)}
                        key={index}
                        css={{
                            margin: activeID === index
                                ? '0 0.625rem 1.25rem 0.625rem'
                                : '0 1.25rem 1.25rem 1.25rem'
                        }}
                    />
                )}
                <div css={styles.cardsBorderBottom} />
            </div>
            <div
                css={styles.stories}
            // children={StoriesTSX}
            />
        </Flexbox>
    )
}

export default Sidebar;

const StoriesTSX = (
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

/**
 *
 * Escape the scroll
 */

// const ActiveCard = (props) => {

//     const controllerID = "ctrl-" + Math.trunc(Math.random() * 10000000);
//     const cardID = "card-" + Math.trunc(Math.random() * 10000000);

//     function setCard() {
//         const controller = document.getElementById(controllerID) as HTMLDivElement || null;
//         const card = document.getElementById(cardID) as HTMLDivElement || null;
//         console.log(controller.offsetTop.toString());
//         card.style.width = controller.offsetWidth.toString() + 'px';
//         card.style.height = controller.offsetHeight.toString() + 'px';
//         card.style.top = controller.getBoundingClientRect().top.toString() + 'px';
//         card.style.left = controller.getBoundingClientRect().left.toString() + 'px';
//         card.style.display = 'block';
//     }

//     useEffect(() => {
//         const container = document.getElementById(props.containerId) as HTMLDivElement || null;
//         container.addEventListener("scroll", setCard);
//         setCard();

//         return () => {
//             container.removeEventListener("scroll", setCard);
//         }

//     })

//     return (
//         <div
//             style={{
//                 height: '180px',
//                 marginBottom: '20px'
//             }}
//             css={{ flex: 1 }}
//             id={controllerID}
//         >
//             {ReactDOM.createPortal(
//                 <Card
//                     animation={props.animation}
//                     active={props.active}
//                     onClick={props.onClick}
//                     css={{
//                         display: 'none',
//                         position: 'absolute',
//                         zIndex: 99
//                     }}
//                     id={cardID}
//                 />,
//                 document.body
//             )}
//         </div>
//     )
// }
