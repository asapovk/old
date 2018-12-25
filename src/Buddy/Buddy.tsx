import { jsx } from '@emotion/core'
import useStyles from './useStyles';
import React, { Component, CSSProperties, useEffect, useImperativeMethods, forwardRef } from 'react';
import { Styles } from '../index';

require('./lib/TweenMax.min');
require('./lib/MorphSVGPlugin.min');

declare const TweenMax: any
declare const Power0: any

export interface BuddyProps {
    style?: CSSProperties
    size?: number
    defaultFace?: "happy" | "sad" | "normal"
}

export default forwardRef((props: BuddyProps, ref) => {

    let timeline: any
    const ease = Power0.easeNone;

    let buddy: HTMLElement
    let buddyContainer: HTMLElement
    let buddyMouth: HTMLElement

    let buddyBrouwLeft: HTMLElement
    let buddyBrouwRight: HTMLElement

    let buddyEyes: HTMLCollection
    let buddyBrouws: HTMLCollection

    let PATH_STATES: any = {};
    let cursorPos = { x: 0, y: 0 };

    let BUDDY_ID: string = "_" + (Math.random() * 10000000).toFixed(0);

    useImperativeMethods(ref, () => ({
        makeJumpy() {
            makeJumpy();
        },
        makeHappy() {
            makeHappy();
        },
        makeSad() {
            makeSad();
        },
        makeNormal() {
            makeNormal();
        },
        stopAnimation() {
            stopAnimation();
        }
    }));

    /**
     * ComponentDidMount
     */
    useEffect(() => {
        buddy = window.document.getElementById("buddy" + BUDDY_ID)!;
        buddyContainer = window.document.getElementById("buddyContainer" + BUDDY_ID)!;
        buddyMouth = window.document.getElementById("buddyMouth" + BUDDY_ID)!;

        buddyBrouwLeft = window.document.getElementById("buddyBrouwLeft" + BUDDY_ID)!;
        buddyBrouwRight = window.document.getElementById("buddyBrouwRight" + BUDDY_ID)!;

        buddyEyes = window.document.getElementsByClassName("buddyEye");
        buddyBrouws = window.document.getElementsByClassName("buddyBrouw");

        PATH_STATES = {};
        cursorPos = { x: 0, y: 0 };

        const nodeList = window.document.querySelectorAll('#buddyStates' + BUDDY_ID + ' > *');

        [].forEach.call(nodeList, el => {
            const key = el.getAttribute("data-id");
            PATH_STATES[key] = el;
        });

        window.addEventListener("mousemove", moveEyes as any);
        window.addEventListener("touchmove", moveEyes as any);
    }, []);

    /**
     * ComponentWillRecieveProps and DidUnmount (return)
     */
    useEffect(() => {
        switch (props.defaultFace) {
            case 'happy': makeHappy(true); break;
            case 'sad': makeSad(true); break;
            case 'normal': makeNormal(true); break;
            default: makeHappy(true);
        }
        return () => {
            window.removeEventListener("mousemove", moveEyes as any);
            window.removeEventListener("touchmove", moveEyes as any);
        };
    }, [props.defaultFace]);

    function makeHappy(instant = false) {
        const speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthHappy, ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftHappy, ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightHappy, ease });
    }


    function makeNormal(instant = false) {
        const speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthNormal, ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftNormal, ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightNormal, ease });
    }

    function makeSad(instant = false) {
        const speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthSad, ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftSad, ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightSad, ease });
    }

    function makeJumpy(repeat = 0) {
        var speed = 0.15;
        //@ts-ignore TimelineMax
        timeline = new TimelineMax({ repeat, repeatDelay: 0, delay: 0.5, paused: true });
        timeline
            .to(buddyContainer, speed, { y: -20, ease })
            .to(buddyContainer, speed, { y: 0, ease })
            .to(buddyContainer, speed, { y: -10, ease })
            .to(buddyContainer, speed, { y: 0, ease })
            .to(buddyContainer, speed, { y: -5, ease })
            .to(buddyContainer, speed, { y: 0, ease });
        timeline.play();
    }

    function stopAnimation() {
        if (timeline) {
            timeline.stop();
            timeline = null
        }
    }

    function moveEyes(e, isTouch) {
        if (isTouch) {
            cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY };
        } else {
            cursorPos = { x: e.clientX, y: e.clientY };
        }

        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        const getOffset = el => {
            el = el.getBoundingClientRect();
            return { x: el.left + window.scrollX, y: el.top + window.scrollY };
        }

        const action = (el) => {
            const elOffset = getOffset(el);
            const bBox = el.getBBox();
            const centerX = elOffset.x + bBox.width / 2;
            const centerY = elOffset.y + bBox.height / 2;
            const percentTop = Math.round((cursorPos.y - centerY) * 100 / windowHeight);
            const percentLeft = Math.round((cursorPos.x - centerX) * 100 / windowWidth);
            el.style.transform = `translate(${percentLeft / 5}px, ${percentTop / 5}px)`;
        }

        for (let i = 0; i < buddyEyes.length; ++i) {
            action(buddyEyes[i])
        }
        for (let i = 0; i < buddyBrouws.length; ++i) {
            action(buddyBrouws[i])
        }
    }

    const st = {
        eye: { fill: "url(#BUDDY_GRADIENT)" },
        brouw: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 8, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        nouse: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        mouth: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 17, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        hide: { opacity: 0 }
    } as any;

    const style = {
        width: (props.size || 1) * 3 + "rem",
        height: (props.size || 1) * 3 + "rem"
    };

    return (
        <Styles>
            {styles => (
                <div id={"buddy" + BUDDY_ID} style={style}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 220 225">
                        <defs>
                            <linearGradient id="BUDDY_GRADIENT" gradientUnits="userSpaceOnUse" x1="395.3553" y1="290.6671" x2="15.3163" y2="134.3555" gradientTransform="matrix(1 0 0 -1 0 222.84)">
                                <stop offset="0" style={{ stopColor: styles.theme.gradient.buddy[0] }} />
                                <stop offset="1" style={{ stopColor: styles.theme.gradient.buddy[1] }} />
                            </linearGradient>
                        </defs>
                        <g id={"buddyContainer" + BUDDY_ID}>
                            <path className="buddyBrouw" id={"buddyBrouwLeft" + BUDDY_ID} style={st.brouw} d="M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" />
                            <path className="buddyBrouw" id={"buddyBrouwRight" + BUDDY_ID} style={st.brouw} d="M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" />
                            <circle className="buddyEye" style={st.eye} cx="58.1" cy="70.9" r="17.8" />
                            <circle className="buddyEye" style={st.eye} cx="155.8" cy="70.9" r="17.8" />
                            {/* <path id={"buddyNouse"+BUDDY_ID} style={st.nouse} d="M117.3,88.7c0,0,4.3,37.3-9.5,29.3c-8.6-5-7,8.1-7,8.1" /> */}
                            <path id={"buddyMouth" + BUDDY_ID} style={st.mouth} d="M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" />

                            <g style={st.hide} id={"buddyStates" + BUDDY_ID}>
                                <path data-id="mouthNormal" id={"buddyMouthStateNormal" + BUDDY_ID} d="M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" />
                                <path data-id="mouthHappy" id={"buddyMouthStateHappy" + BUDDY_ID} d="M185.3,160c0,0-25.8,25.2-75.3,25.4c-43.7,0.2-75.3-24.6-75.3-24.6" />
                                <path data-id="mouthSad" id={"buddyMouthStateSad" + BUDDY_ID} d="M154.8,165.6c0,0-19.4-10.1-50.4-7.7C72.5,160.5,54,177.2,54,177.2" />

                                <path data-id="brouwLeftNormal" id={"buddyBrouwLeftStateNormal" + BUDDY_ID} d="M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" />
                                <path data-id="brouwRightNormal" id={"buddyBrouwRightStateNormal" + BUDDY_ID} d="M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" />

                                <path data-id="brouwLeftHappy" id={"buddyBrouwLeftStateHappy" + BUDDY_ID} d="M71.6,36.2c0,0-5.1-2.2-13.5-2.3c-9.5-0.1-18.6,5.5-18.6,5.5" />
                                <path data-id="brouwRightHappy" id={"buddyBrouwRightStateHappy" + BUDDY_ID} d="M173.6,39.9c0,0-4.7-2.9-13-4.4c-9.4-1.6-19.2,2.5-19.2,2.5" />

                                <path data-id="brouwLeftSad" id={"buddyBrouwLeftStateSad" + BUDDY_ID} d="M58.1,39c0,0-6.5,0.9-11.5,3.6c-5,2.7-7.2,6.4-7.2,6.4" />
                                <path data-id="brouwRightSad" id={"buddyBrouwRightStateSad" + BUDDY_ID} d="M175.7,49.8c0,0-2.1-3.6-6.7-6.8c-4.2-3-11-3.1-11-3.1" />
                            </g>
                        </g>
                    </svg>
                </div>
            )}
        </Styles>
    );
})
