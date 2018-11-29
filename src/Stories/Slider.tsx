import React, { useState, useEffect } from 'react';
import { Flexbox } from '../Flexbox';
import useProgress from '../hooks/useProgress';

export default () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false);

    function Progress({ animate, setPause, last, setNext, itemIndex, pause }) {
        let progress = useProgress(animate, 5000);

        useEffect(() => {
            if (Boolean(Math.floor(progress))) {
                setNext();
            }
        }, [progress]);

        return (
            <Flexbox onClick={() => setPause()} flex={1} style={{ height: '100%', background: '#e6e6e6', borderRadius: 10, overflow: 'hidden', marginRight: (last ? 0 : 5) }}>
                <div style={{ width: `${progress * 100}%`, backgroundColor: 'red' }} />
            </Flexbox>
        )
    }

    function onPause() {
        if (!pause) {
            return setPause(true);
        }
        setPause(false);
    }

    const array = new Array(5).fill(0);

    return (
        <Flexbox style={{ width: '400px', height: '15px' }} pt='10rem' pl='10rem'>
            {array.map((item, index) => (
                <Progress key={index} animate={index === currentIndex} itemIndex={index} pause={pause} setPause={onPause} last={index === array.length} setNext={() => setCurrentIndex((index + 1) % array.length)} />
            ))}
        </Flexbox>
    )
}