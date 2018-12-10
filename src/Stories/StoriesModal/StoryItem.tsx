import React, { useEffect } from 'react';
import useClass from '../../hooks/useClass';
import useStyles from '../../hooks/useStyles';

export default ({ active, story, index, onClick, onNextStory, onPrevStory, currentStoryIndex }) => {

    const [storyContainerClassname, storyContainerModifiers] = useClass('ui-stories-modal-container-story');

    const styles = useStyles();

    useEffect(() => {
        if (active) {
            storyContainerModifiers.addModifier('active');
        } else {
            storyContainerModifiers.removeModifier('active');
        }
    }, [active]);

    return (
        <div
            id={`ui-stories-item-${index}`}
            className={storyContainerClassname}
            onClick={() => onClick()}
            style={{
                backgroundImage: `url(${story.image})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                borderColor: styles.theme.borders.table.color
            }}
        />
    )
}