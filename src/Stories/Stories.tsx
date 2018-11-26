import React, { useState } from 'react';
import { Flexbox } from '..';
import useStyles from '../hooks/useStyles';

interface Story {
    image: any
    label: string
    labelColor: any
    read: boolean
    onClick?: () => void
}

interface IStories {
    title: string
    stories: Story[]
}

export default (props: IStories) => {
    if (!props.stories.length) return null;

    const styles = useStyles();

    return (
        <Flexbox className='ui-stories' flexDirection='column'>
            <div className='ui-stories-title'>{props.title}</div>
            <Flexbox className='ui-stories-items' flex={1}>
                {props.stories.map((story, index) => (
                    <Flexbox
                        key={index}
                        className='ui-stories-items-item'
                        style={{
                            backgroundImage: `url(${story.image})`,
                            borderColor: !story.read ? styles.theme.highlight.rgba(.7) : 'transparent'
                        }}
                        onClick={() => {
                            story.onClick && story.onClick();
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
        </Flexbox >
    )
}