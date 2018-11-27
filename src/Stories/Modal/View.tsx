import React, { useEffect, useState } from 'react';
import { Flexbox } from '../..';
import { useStoriesContext } from '../Stories';
import useBrowser from '../../hooks/useBrowser';
import { IStoriesModal } from '.';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

let timeout;
export default (props: IStoriesModal) => {
    const browser = useBrowser();
    const ctx = useStoriesContext();

    const [slide, setSlide] = useState(0);

    const { stories } = props;
    const { currentStoryIndex, setStory, modalClose } = ctx;

    function changeSlide(index: number) {
        window.clearTimeout(timeout);
        setSlide(index);
    }

    function onNext() {
        if (slide < stories[currentStoryIndex].slides.length - 1) {
            changeSlide(slide + 1);
        } else {
            if (currentStoryIndex < stories.length - 1) {
                setStory(currentStoryIndex + 1);
                changeSlide(0);
            } else {
                modalClose();
            }
        }
    }

    function onPrev() {
        if (slide === 0) {
            if (currentStoryIndex !== 0) {
                setStory(currentStoryIndex - 1);
            }
        } else {
            changeSlide(slide - 1);
        }
    }

    useEffect(() => {
        timeout = window.setTimeout(() => onNext(), 2000);
    }, [slide]);

    return (
        <Flexbox alignItems="center" justifyContent="center" style={{ height: !browser.isMobile ? "100%" : "auto" }}>
            <Flexbox style={{ minWidth: 320, minHeight: 480 }}>
                <PrevButton onPrev={onPrev} />
                <Flexbox flexDirection='column' flex={1}>
                    <Flexbox pb='0.25rem'>
                        {stories[currentStoryIndex].slides.map((slide, index) => (
                            <Flexbox
                                key={slide.key + '-' + index}
                                flex={1}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, .1)',
                                    height: 2,
                                    marginRight: index === stories[currentStoryIndex].slides.length - 1 ? '0' : '5px'
                                }}
                            />
                        ))}
                    </Flexbox>
                    <Flexbox onClick={() => onNext()} flex={1} style={{ backgroundImage: `url(${stories[currentStoryIndex].slides[slide].image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                </Flexbox>
                <NextButton storiesLength={stories.length} onNext={onNext} />
            </Flexbox>
        </Flexbox>
    )
}