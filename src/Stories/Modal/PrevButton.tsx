import React from 'react';
import { Flexbox, Icon } from '../..';
import { useStoriesContext } from '../Stories';
import useBrowser from '../../hooks/useBrowser';

export default (props) => {
    const ctx = useStoriesContext();
    const browser = useBrowser();

    if (ctx.currentStoryIndex == 0) return null;

    return (
        <div className='ui-stories-modal-nextstory' style={{ marginLeft: !browser.isMobile ? '-2.5rem' : '0' }}>
            <Flexbox
                style={{ height: '100%' }}
                justifyContent='center'
                alignItems='center'
                onClick={() => props.onPrev()}>
                <Icon type="left" />
            </Flexbox>
        </div>
    )
}