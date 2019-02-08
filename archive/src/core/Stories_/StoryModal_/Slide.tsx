import React, { useEffect } from 'react';
import useClass from '../../../hooks/useClass';

export default ({ image, children, isCurrent, onPause }) => {

    const [slideClassName, slideClassModifier] = useClass('ui-stories-modal-container-story-slides-slide');

    useEffect(() => {
        if (isCurrent) {
            slideClassModifier.addModifier('active');
        } else {
            slideClassModifier.removeModifier('active');
        }
    }, [isCurrent]);

    return (
        <div onClick={() => onPause()} className={slideClassName} style={{ backgroundImage: `url(${image})` }} children={children} />
    )
}