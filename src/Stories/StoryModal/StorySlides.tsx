import React, { useReducer, useEffect } from 'react';
import Slide from './Slide';
import ProgressBar from './ProgressBar';
import Control from './Control';

let SLIDE_DURATION = 3000;
let timeout;

export default ({ active, slides, onNextStory, onPrevStory, currentStoryIndex }) => {

    type ActionTypes = {
        type: 'INITIAL' | 'NEXT' | 'PREVIOUS' | 'PAUSE' | 'CONTINUE'
    }

    const initialState = {
        activeSlide: 0,
        isPlaying: true,
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
        console.log(1);
        if (state.activeSlide === 0) {
            if (currentStoryIndex === 0) {
                return dispatch({ type: 'INITIAL' });
            }
            return onPrevStory();
        }
        dispatch({ type: 'PREVIOUS' });
    }

    //@ts-ignore
    useEffect(() => {
        if (active) {
            if (state.isPlaying) {
                timeout = setTimeout(() => onNextSlide(), SLIDE_DURATION);
                return () => clearTimeout(timeout);
            }
        }
    }, [active, state.activeSlide, state.isPlaying]);

    useEffect(() => dispatch({ type: 'INITIAL' }), [currentStoryIndex]);

    return (
        <div style={{ height: '100%' }} className={'ui-stories-modal-container-story-slides'}>
            <div style={{ position: 'absolute', left: 0, top: -10, right: 0, display: 'flex', flexDirection: 'row' }}>
                {slides.map((slide, index) => (
                    <ProgressBar
                        key={currentStoryIndex + '-' + index}
                        lastElement={index === slides.length - 1}
                        animate={index === state.activeSlide && state.isPlaying}
                        finished={index < state.activeSlide}
                        time={SLIDE_DURATION}
                    />
                ))}
            </div>
            {/* <Control onPrev={onPrevSlide} onNext={onNextSlide} /> */}
            {slides.map((slide, index) => (
                <Slide
                    isCurrent={state.activeSlide === index}
                    key={index}
                    image={slide.image}
                    children={slide.text}
                    onPause={() => dispatch({ type: 'PAUSE' })}
                    onContinue={() => dispatch({ type: 'CONTINUE' })}
                />
            ))}
        </div>
    )
}