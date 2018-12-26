import React, { useReducer } from 'react';
import useBrowser from '../../../hooks/useBrowser';
import { Flexbox } from '../..';
import { IStoriesModal } from '.';
import StoryContainer from './StoryContainer';

export default ({ stories, setModalActive, currentStoryIndex }) => {

    const browser = useBrowser();

    const initialState = {
        currentStoryIndex: currentStoryIndex
    };

    const [state, dispatch] = useReducer(
        (state, action: { type: 'NEXT' | 'PREV' }) => {
            switch (action.type) {
                case 'NEXT':
                    return {
                        ...state,
                        currentStoryIndex: (state.currentStoryIndex + 1)
                    }
                case 'PREV':
                    return {
                        ...state,
                        currentStoryIndex: (state.currentStoryIndex - 1)
                    }
                default:
                    return state;
            }
        }, initialState
    );

    function onNextStory() {
        if (state.currentStoryIndex === stories.length - 1) {
            return setModalActive(false);
        }
        dispatch({ type: 'NEXT' });
    };

    function onPrevStory() {
        if (state.currentStoryIndex === 0) {
            return;
        }
        dispatch({ type: 'PREV' });
    }

    return (
        <div style={{ width: '100%', height: !browser.isMobile ? "100%" : "auto" }}>
            <div className='ui-stories-modal-container'>
                {stories.map((story, index) => (
                    <StoryContainer
                        key={index}
                        story={story}
                        active={index === state.currentStoryIndex}
                        onNextStory={onNextStory}
                        onPrevStory={onPrevStory}
                        currentStoryIndex={state.currentStoryIndex}
                    />

                ))}
            </div>
        </div>
    )
}