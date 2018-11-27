import React from 'react';
import { Flexbox } from '..';
import useStyles from '../hooks/useStyles';
import { useStoriesContext, IStories } from './Stories';

export default (props: IStories) => {

    const styles = useStyles();
    const ctx = useStoriesContext();

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
                            borderColor: !story.read ? styles.theme.highlight.rgba(.7) : 'transparent'
                        }}
                        onClick={() => {
                            ctx.setStory(index);
                            ctx.modalOpen();
                        }}
                        alignItems='flex-end'
                    >
                        <div
                            className='ui-stories-items-label'
                            style={{ color: story.labelColor || '#fff' }}
                        >
                            {story.label}
                        </div>
                    </Flexbox>
                ))}
            </Flexbox>
        </Flexbox>
    )
}