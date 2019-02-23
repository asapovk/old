// /** @jsx jsx */
// import { jsx } from '@emotion/core';
// import createStyles from './styles';
// import { useState, useEffect, useLayoutEffect } from 'react';
// import { useBrowser } from '../../hooks';

// const storiesData = new Array(5).fill(1);

// export default () => {
//     const browser = useBrowser();

//     const [active, setActive] = useState(-1);
//     const [position, setPosition] = useState(0);

//     useEffect(() => {
//         changeStoryViewPos();
//     }, [browser.height, browser.width, active]);

//     function changeStoryViewPos() {
//         const wrapper = document.getElementById("fullstories");
//         if (wrapper) {
//             const el: HTMLDivElement = wrapper.childNodes[0] as HTMLDivElement;
//             setPosition((browser.width / 2 - (el.offsetWidth / 2 + 40)) - (Math.max(active, 0) * (el.offsetWidth + 40)));
//         }
//     }

//     let styles = createStyles(active, position);

//     return (
//         <div css={styles.container}>
//             {storiesData.map((_, index) => (
//                 <div css={styles.minifiedStory} onClick={() => setActive(index)}>
//                     Some text here
//                 </div>
//             ))}

//             <div css={styles.modal}>
//                 <div css={styles.fullStoriesList} id="fullstories">
//                     {storiesData.map((_, index) => (
//                         // <div css={styles.fullStoryWrapper}>
//                         <div id={`fullstory-${index}`} css={styles.fullStory} onClick={() => setActive(index)}>
//                             {index}
//                         </div>
//                         // </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }