// import React, { useEffect } from 'react';
// import useProgress from '../../hooks/useProgress';
// import { Flexbox } from '../..';
// import useClass from '../../hooks/useClass';

// export default ({ animate, time, lastElement, finished, pause }) => {

//     let progress = useProgress(animate, time);
//     let [progressClassName, progressClassModifier] = useClass('ui-stories-modal-container-story-progressbar');

//     useEffect(() => {
//         if (finished) {
//             progressClassModifier.addModifier('finished');
//         }
//     }, [finished])

//     return (
//         <Flexbox flex={1} className={progressClassName} style={{ marginRight: lastElement ? 0 : 5 }}>
//             <div style={{ width: `${progress * 100}%` }} />
//         </Flexbox>
//     )
// }