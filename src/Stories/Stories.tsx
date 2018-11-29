import React, { useState, Fragment } from 'react';
import StoriesList from './StoriesList';
import StoryModal from './StoryModal';

export interface StorySlide {
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

export default (props: IStories) => {

    const [modalActive, setModalActive] = useState(false);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

    return (
        <Fragment>
            <StoriesList
                {...props}
                setStory={setCurrentStoryIndex}
                setModalActive={setModalActive}
            />
            {modalActive && (
                <StoryModal
                    {...props}
                    active={modalActive}
                    setModalActive={setModalActive}
                    currentStoryIndex={currentStoryIndex}
                />
            )}
        </Fragment>
    )
}