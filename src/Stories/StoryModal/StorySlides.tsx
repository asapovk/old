import React, { useReducer, useEffect } from 'react';
import Slide from './Slide';
import ProgressBar from './ProgressBar';
import Control from './Control';

let SLIDE_DURATION = 3000;

export default ({ active, slides, onNextStory, onPrevStory, currentStoryIndex }) => {

    type ActionTypes = {
        type: 'INITIAL' | 'NEXT' | 'PREVIOUS' | 'PAUSE' | 'CONTINUE'
    }

    const initialState = {
        activeSlide: 0,
        isPlaying: true
    };

    const [state, dispatch] = useReducer(
        (state, action: ActionTypes) => {
            switch (action.type) {
                case 'INITIAL':
                    return initialState;
                case 'PAUSE':
                    return {
                        ...state,
                        isPlaying: false
                    }
                case 'CONTINUE':
                    return {
                        ...state,
                        isPlaying: true
                    }
                case 'NEXT':
                    return {
                        ...state,
                        activeSlide: (state.activeSlide + 1)
                    }
                case 'PREVIOUS':
                    return {
                        ...state,
                        activeSlide: (state.activeSlide - 1)
                    }

                default:
                    return state;
            }
        }, initialState
    )

    function onNextSlide() {
        if (state.activeSlide === slides.length - 1) {
            return onNextStory();
        }
        dispatch({ type: 'NEXT' });
    }

    function onPrevSlide() {
        if (state.activeSlide === 0) {
            if (currentStoryIndex === 0) {
                return dispatch({ type: 'INITIAL' });
            }
            return onPrevStory();
        }
        dispatch({ type: 'PREVIOUS' });
    }

    function onPause() {
        if (state.isPlaying) {
            return dispatch({ type: 'PAUSE' })
        }
        dispatch({ type: 'CONTINUE' });
    }

    useEffect(() => dispatch({ type: 'INITIAL' }), [currentStoryIndex]);

    return (
        <div style={{ height: '100%' }} className={'ui-stories-modal-container-story-slides'}>
            <div style={{ position: 'absolute', left: 0, top: -10, right: 0, display: 'flex', flexDirection: 'row' }}>
                {slides.map((slide, index) => (
                    <ProgressBar
                        key={currentStoryIndex + '-' + index}
                        isPlaying={state.isPlaying}
                        isCurrent={index === state.activeSlide}
                        isPassed={state.activeSlide > index}
                        duration={SLIDE_DURATION}
                        onPassed={onNextSlide}
                    />
                ))}
            </div>
            {/* <Control onPrev={onPrevSlide} onNext={onNextSlide} /> */}
            {slides.map((slide, index) => (
                <Slide
                    key={index}
                    isCurrent={state.activeSlide === index}
                    image={slide.image}
                    children={slide.text}
                    onPause={onPause}
                />
            ))}
        </div>
    )
}