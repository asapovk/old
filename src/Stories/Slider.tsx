import React, { useState, useEffect } from 'react';
import { Flexbox } from '../Flexbox';
import useProgress from '../hooks/useProgress';

export default () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [pause, setPause] = useState(false);

    function Progress({ animate, setPause, last, setNext, itemIndex, pause }) {
        let progress = useProgress(animate, 10000);

        useEffect(() => {
            if (Boolean(Math.floor(progress))) {
                setNext(itemIndex + 1);
            }
        }, [progress]);

        return (
            <Flexbox onClick={() => setPause()} flex={1} style={{ height: '100%', background: '#e6e6e6', marginRight: (last ? 0 : 5) }}>
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

    const array = new Array(3).fill(0);

    return (
        <Flexbox style={{ width: '200px', height: '10px' }}>
            {array.map((item, index) => (
                <Progress key={index} animate={index === currentIndex} itemIndex={index} pause={pause} setPause={onPause} last={index === array.length} setNext={setCurrentIndex} />
            ))}
        </Flexbox>
    )
}