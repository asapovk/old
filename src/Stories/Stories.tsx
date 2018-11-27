import React, { useState, useContext, useEffect } from 'react';
import StoriesList from './StoriesList';
import StoriesModal from './Modal';

interface StorySlide {
    image: any,
    text: string
    key: string
}
export interface Story {
    image: any
    label: string
    labelColor: any
    read: boolean
    onClick?: () => void
    slides: StorySlide[]
}

export interface IStories {
    title: string
    stories: Story[]
}

interface IStoriesContext {
    modalClose: () => void
    modalOpen: () => void
    setStory: (storyIndex: number) => void
    currentStoryIndex: number
    active: boolean
}

const StoriesContext = React.createContext({} as IStoriesContext);

export function useStoriesContext() {
    return useContext(StoriesContext);
}

export default (props: IStories) => {

    if (!props.stories.length) return null;

    const [modalActive, setModalActive] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    const onModalClose = () => {
        setModalActive(false);
    }

    return (
        <StoriesContext.Provider value={{
            active: modalActive,
            currentStoryIndex: currentStoryIndex,
            setStory: (storyIndex: number) => setCurrentStoryIndex(storyIndex),
            modalOpen: () => setModalActive(true),
            modalClose: () => onModalClose()
        }}>
            <StoriesList {...props} />
            {modalActive && <StoriesModal stories={props.stories} />}
        </StoriesContext.Provider>
    )
}