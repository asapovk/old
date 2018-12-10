import React, { useReducer, useState, useLayoutEffect } from 'react';
import useBrowser from '../../hooks/useBrowser';
import { IStoriesModal } from '.';
import StoryItem from './StoryItem';

export default ({ stories, setModalActive, currentStoryIndex }) => {

    const browser = useBrowser();
    const [storyWidth, setStoryWidth] = useState(0);

    const initialState = {
        currentStoryIndex: currentStoryIndex
    };

    const [state, dispatch] = useReducer(
        (state, action: { type: 'NEXT' | 'PREV' | 'SET', payload?: any }) => {
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
                case 'SET':
                    return {
                        ...state,
                        currentStoryIndex: action.payload
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

    const st = {
        transform: `translateX(${(browser.width / 2 - storyWidth / 2 - 40) - (40 * state.currentStoryIndex) - (state.currentStoryIndex * storyWidth)}px) translateZ(0)`
    }

    useLayoutEffect(() => {
        let el = document.getElementById('ui-stories-item-0') as HTMLDivElement;
        if (el) {
            setStoryWidth(el.offsetWidth)
        }
    }, [browser.width])

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div className='ui-stories-modal-container' style={st}>
                {stories.map((story, index) => (
                    <StoryItem
                        key={index}
                        index={index}
                        onClick={() => dispatch({ type: 'SET', payload: index })}
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