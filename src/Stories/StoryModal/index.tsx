import React, { Fragment, useEffect } from 'react';
import { Story, IStories } from '../Stories';
import ModalMask from './ModalMask';
import StoriesContainer from './StoriesContainer';
import useClass from '../../hooks/useClass';

export interface IStoriesModalProps {
    stories: Story[]
    active: boolean
    setModalActive: (active: boolean) => void
    currentStoryIndex: number
}

export type IStoriesModal = IStories & IStoriesModalProps;

export default (props: IStoriesModal) => {

    const [modalClassName, modalClassModifier] = useClass('ui-stories-modal');
    const { active } = props;

    useEffect(() => {
        if (active) {
            modalClassModifier.addModifier('visible');
        } else {
            modalClassModifier.removeModifier('visible');
        }
    }, [active]);

    return (
        <Fragment>
            <ModalMask active={props.active} />
            <div className={modalClassName} children={<StoriesContainer {...props} />} />
        </Fragment>
    )
}

{/* <div className={`ui-stories-modal ${ctx.active && "ui-stories-modal-visible"} ${!ctx.active && "ui-stories-modal-hidding"}`}> */ }
