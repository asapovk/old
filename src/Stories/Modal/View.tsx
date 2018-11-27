import React, { useEffect } from 'react';
import { Flexbox } from '../..';
import { useStoriesContext } from '../Stories';
import useStyles from '../../hooks/useStyles';
import useBrowser from '../../hooks/useBrowser';
import { IStoriesModal } from '.';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

export default (props: IStoriesModal) => {
    const ctx = useStoriesContext();
    const styles = useStyles();

    const browser = useBrowser();

    useEffect(() => {

    });

    if (ctx.currentStoryIndex == -1) return null;

    return (
        <Flexbox alignItems="center" justifyContent="center" style={{ height: !browser.isMobile ? "100%" : "auto" }}>
            <Flexbox style={{
                color: styles.modal.view.textColor,
                borderRadius: styles.modal.view.borderRadius,
                background: styles.modal.view.background,
                borderColor: styles.modal.view.borderColor,
                minWidth: 320,
                minHeight: 480
            }}>
                {/* {props.title ? (
                    <div className={`ui-stories-modal-title`} style={{ color: styles.modal.view.titleColor }}>
                        {props.title}
                        {props.subtitle ? <span style={{ color: styles.modal.view.subtitleColor }}>{props.subtitle}</span> : null}
                    </div>
                ) : null} */}
                <PrevButton />
                <Flexbox pb='1rem'>
                    {props.stories[ctx.currentStoryIndex].slides.map((slide, index) => (
                        <span style={{ height: 2, marginRight: index === props.stories[ctx.currentStoryIndex].slides.length - 1 ? '0' : '5px' }}></span>
                    ))}
                </Flexbox>
                <Flexbox flex={1} style={{ backgroundImage: `url(${props.stories[ctx.currentStoryIndex].image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></Flexbox>
                <NextButton storiesLength={props.stories.length} />
            </Flexbox>
            <button onClick={() => ctx.modalClose()}>close</button>
        </Flexbox>
    )
}