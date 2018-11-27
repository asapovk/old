import React from 'react';
import { Flexbox, Icon } from '../..';
import { useStoriesContext } from '../Stories';
import useBrowser from '../../hooks/useBrowser';

export default (props) => {
    const ctx = useStoriesContext();
    const browser = useBrowser();

    if (ctx.currentStoryIndex === props.storiesLength - 1) return null;

    return (
        <div className='ui-stories-modal-prevstory' style={{ marginRight: !browser.isMobile ? '-2.5rem' : '0' }}>
            <Flexbox
                style={{ height: '100%' }}
                justifyContent='center'
                alignItems='center'
                onClick={() => ctx.currentStoryIndex !== null && ctx.setStory(++ctx.currentStoryIndex)}
            >
                <Icon type="right" />
            </Flexbox>
        </div>
    )
}