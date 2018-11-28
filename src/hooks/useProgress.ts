// got from React conf 2018
// don't trust this code

import { useState, useEffect } from "react";

let useProgress = (animate: boolean, time: number) => {
    let [progress, setProgress] = useState<number>(0);

    useEffect(
        //@ts-ignore
        () => {
            if (animate) {
                let rafId: number | null = null;
                let start = null;
                let step = timestamp => {
                    if (!start) start = timestamp;
                    let progress = timestamp - start!;
                    setProgress(progress);
                    if (progress < time) {
                        rafId = requestAnimationFrame(step);
                    }
                };
                rafId = requestAnimationFrame(step);
                return () => cancelAnimationFrame(rafId!);
            }
        },
        [animate, time]
    );

    return animate ? Math.min(progress / time, time) : 0;
};

export default useProgress;
