import React, { useState, Fragment } from 'react';
import StoriesList from './StoriesList';
import StoryModal from './StoryModal';

export interface IStorySlide {
    image: any,
    text: string
    key: string
}
export interface IStory {
    image: any
    label: string
    labelColor: any
    read: boolean
    onClick?: () => void
    slides: IStorySlide[]
}

export interface IStories {
    title: string
    stories: IStory[]
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