/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, Fragment, useEffect, useLayoutEffect } from 'react';
import StoriesList from './StoriesList';
import StoriesModal from './StoriesModal';
import css from '@emotion/css';
import useBrowser from '../../hooks/useBrowser';

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
    let [activeIndex, setActiveIndex] = useState(-1);

    let active = false;
    const browser = useBrowser();

    const handle = (index: number) => {
        const el = document.getElementById('test')!;
        const mask = document.getElementById('mask')!;
        const minifiedContainer = document.getElementById('minifiedContainer')!;
        const element = minifiedContainer.childNodes[index - 1] as HTMLElement;

        const activatedTransform = `translate(${(browser.width / 2) - (index * element.offsetWidth) - element.offsetWidth / 2}px, 0px) scale(1)`;
        const deactivatedTransform = `translate(${(-el.offsetWidth / 2)}px, ${(-el.offsetHeight / 2)}px) scale(0)`;

        if (!active) {
            el.style.transition = 'none';
            // el.style.opacity = "0";
            el.style.transform = deactivatedTransform;
            el.style.visibility = 'hidden';

            setTimeout(() => {
                el.style.transition = 'all 5s ease-in-out';
                // el.style.opacity = "1";
                el.style.transform = activatedTransform
                el.style.visibility = 'visible';
            });

            mask.style.visibility = 'visible';

        } else {
            el.style.transition = 'none';
            // el.style.opacity = "1";
            el.style.transform = activatedTransform;
            el.style.visibility = 'visible';


            setTimeout(() => {
                el.style.transition = 'all 5s ease-in-out';
                // el.style.opacity = "0";
                el.style.transform = deactivatedTransform;
                el.style.visibility = 'hidden';
            });
            mask.style.visibility = 'hidden';
        }

        active = !active;
    }

    function onStoryClick(index: number) {
        setActiveIndex(index);
        handle(index);
    }

    return (
        <Fragment>
            <div>
                <div id="minifiedContainer">
                    <div style={{ width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }} onClick={() => handle(1)}>change</div>
                    <div style={{ width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }} onClick={() => handle(2)}>change</div>
                    <div style={{ width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }} onClick={() => handle(3)}>change</div>
                    <div style={{ width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }} onClick={() => handle(4)}>change</div>
                    <div style={{ width: 100, height: 200, display: "inline-block", backgroundColor: "red", marginRight: 10 }} onClick={() => handle(5)}>change</div>
                </div>
                <div
                    id="mask"
                    style={{
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: "rgba(0,0,0,.5)",
                        visibility: "hidden"
                    }}>
                    <div
                        id="test"
                        style={{
                            visibility: "hidden",
                            display: "table",
                            height: "100%",
                        }}
                        children={
                            <Fragment>
                                <div style={{ width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }} onClick={() => handle(1)}>change1</div>
                                <div style={{ width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }} onClick={() => handle(2)}>change2</div>
                                <div style={{ width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }} onClick={() => handle(3)}>change3</div>
                                <div style={{ width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }} onClick={() => handle(4)}>change4</div>
                                <div style={{ width: 200, height: '100%', display: "inline-table", backgroundColor: "yellow", marginRight: "10px" }} onClick={() => handle(5)}>change5</div>
                            </Fragment>
                        }
                    />
                </div>
            </div>
        </Fragment>
    )
}