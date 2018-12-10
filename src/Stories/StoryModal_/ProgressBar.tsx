import React, { useEffect, useState, useRef } from 'react';

const st = {
    progressWrapper: {
        display: "inline-block", width: 100, height: 10, background: 'black', margin: 2
    },
    progress: {
        background: "red",
        height: 10,
    }
}

const AnimationControl = (el, duration, _cb: () => void) => {
    function whichTransitionEvent(el) {

        if (!el) return false;

        let t;
        const transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    const t = whichTransitionEvent(el);
    if (t) {
        el.addEventListener(t, e => {
            typeof _cb === "function" && _cb();
        });
    } else {
        setTimeout(_ => {
            typeof _cb === "function" && _cb();
        }, duration);
    }
}

interface IProps {
    duration: number
    isPlaying: boolean
    isCurrent: boolean
    isPassed: boolean
    onPassed: () => void
}

export default function TestApp(props: IProps) {
    const { isPlaying, isCurrent, isPassed, onPassed, duration } = props;

    const [width, setWidth] = useState(0);
    const [transition, setTransition] = useState(duration / 1000);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let passOnComplete = true;
        if (ref.current) {
            if (isPlaying) {
                if (isCurrent) {
                    if (transition !== 0) {
                        setWidth(100);
                        AnimationControl(ref.current, duration, () => {
                            if (passOnComplete) {
                                onPassed();
                            }
                        });
                    } else {
                        if (width === 100) {
                            setWidth(0);
                        }
                        setTimeout(() => {
                            setTransition(duration / 1000);
                        }, 100)
                    }
                } else {
                    setTransition(0);
                    if (isPassed) {
                        setWidth(100);
                    } else {
                        setWidth(0);
                    }
                }
            } else {
                setTransition(0);
                setWidth(ref.current.offsetWidth);
            }
        }

        return () => {
            passOnComplete = false;
        }
    }, [isCurrent, isPassed, isPlaying, transition]);

    return (
        <div style={st.progressWrapper}>
            <div ref={ref} style={{
                ...st.progress,
                width: width + "%",
                transition: `all ${transition}s linear`,
            }} />
        </div>
    )
}