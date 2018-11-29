import React from 'react';
import { Flexbox } from '..';
import useStyles from '../hooks/useStyles';
import { IStories } from './Stories';

interface IStoriesListProps {
    setStory: (storyIndex: number) => void
    setModalActive: (active: boolean) => void
}

type IStoriesList = IStories & IStoriesListProps;

export default (props: IStoriesList) => {

    const styles = useStyles();

    function StoryLabel({ story }) {
        return (
            <div
                className='ui-stories-items-label'
                style={{ color: story.labelColor || '#fff' }}
                children={story.label}
            />
        );
    }

    return (
        <Flexbox className='ui-stories' flexDirection='column'>
            <div className='ui-stories-title'>{props.title}</div>
            <Flexbox className='ui-stories-items'>
                {props.stories.map((story, index) => (
                    <Flexbox
                        key={index}
                        className='ui-stories-items-item'
                        style={{
                            backgroundImage: `url(${story.image})`,
                            padding: '0.25rem',
                            borderColor: !story.read ? styles.theme.highlight.rgb : 'transparent'
                        }}
                        onClick={() => {
                            props.setStory(index);
                            props.setModalActive(true);
                        }}
                        alignItems='flex-end'
                        children={<StoryLabel story={story} />}
                    />
                ))}
            </Flexbox>
        </Flexbox>
    )
}