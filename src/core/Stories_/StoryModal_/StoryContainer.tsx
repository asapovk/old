import React, { useEffect } from 'react';
import useClass from '../../../hooks/useClass';
import StorySlides from './StorySlides';

export default ({ story, active, onNextStory, onPrevStory, currentStoryIndex }) => {

    const [storyContainerClassname, storyContainerModifiers] = useClass('ui-stories-modal-container-story');

    useEffect(() => {
        if (active) {
            storyContainerModifiers.addModifier('active');
        } else {
            storyContainerModifiers.removeModifier('active');
        }
    }, [active]);

    return (
        <div className={storyContainerClassname}>
            <StorySlides
                active={active}
                onNextStory={onNextStory}
                onPrevStory={onPrevStory}
                currentStoryIndex={currentStoryIndex}
                slides={story.slides}
            />
        </div>
    )
}