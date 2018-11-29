// got from React conf 2018
// don't trust this code

import { useState, useEffect } from "react";

let useProgress = (animate: boolean, time: number) => {
    let [progress, setProgress] = useState<number>(0);
    let rafId: number | null = null;
    let start = null;

    //@ts-ignore
    useEffect(() => {
        if (animate) {
            let step = timestamp => {
                if (!start) {
                    start = timestamp;
                }
                let currentProgress = timestamp - start!;
                setProgress(currentProgress);

                if (progress < time) {
                    rafId = requestAnimationFrame(step);
                }
            };
            rafId = requestAnimationFrame(step);
            return () => cancelAnimationFrame(rafId!);
        }
    }, [animate, time]);

    return progress / time;
};

export default useProgress;
