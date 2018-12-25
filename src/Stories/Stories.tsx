/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState, Fragment, useEffect, useLayoutEffect } from 'react';
import StoriesList from './StoriesList';
import StoriesModal from './StoriesModal';
import css from '@emotion/css';

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
    let active = false;

    const handle = (index: number) => {
        const el = document.getElementById('test')!;

        if (!active) {
            el.style.transition = 'none';
            el.style.opacity = "0";
            el.style.transform = `translate(${-550 + index * 100}px, -550px) scale(0.1)`;
            el.style.visibility = 'hidden';

            setTimeout(() => {
                el.style.transition = 'all 0.5s ease-in-out';
                el.style.opacity = "1";
                el.style.transform = 'translate(0px, 0px) scale(1)';
                el.style.visibility = 'visible';

            });
        } else {
            el.style.transition = 'none';
            el.style.opacity = "1";
            el.style.transform = 'translate(0px, 0px) scale(1)';
            el.style.visibility = 'visible';


            setTimeout(() => {
                el.style.transition = 'all 0.5s ease-in-out';
                el.style.opacity = "0";
                el.style.transform = `translate(${-550 + index * 100}px, -550px) scale(0.1)`;
                el.style.visibility = 'hidden';
            });
        }

        active = !active;
    }

    return (
        <Fragment>
            <div>
                <div>
                    <button style={{ width: 100, height: 100 }} onClick={() => handle(1)}>change</button>
                    <button style={{ width: 100, height: 100 }} onClick={() => handle(2)}>change</button>
                    <button style={{ width: 100, height: 100 }} onClick={() => handle(3)}>change</button>
                    <button style={{ width: 100, height: 100 }} onClick={() => handle(4)}>change</button>
                    <button style={{ width: 100, height: 100 }} onClick={() => handle(5)}>change</button>
                </div>
                <div
                    id="test"
                    style={{
                        background: "red",
                        width: 1000,
                        height: 1000,
                        visibility: "hidden",
                    }}
                />
            </div>
        </Fragment>
    )
}