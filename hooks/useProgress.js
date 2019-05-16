"use strict";
// got from React conf 2018
// don't trust this code
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useProgress = function (animate, time, pause, currentProgress) {
    var _a = react_1.useState(currentProgress), progress = _a[0], setProgress = _a[1];
    var rafId = null;
    var start = null;
    //@ts-ignore
    react_1.useEffect(function () {
        if (animate) {
            var step_1 = function (timestamp) {
                if (!pause) {
                    if (!start) {
                        start = timestamp;
                    }
                    var currentProgress_1 = timestamp - start;
                    setProgress(currentProgress_1);
                    if (progress < time) {
                        rafId = requestAnimationFrame(step_1);
                    }
                }
            };
            rafId = requestAnimationFrame(step_1);
            return function () { return cancelAnimationFrame(rafId); };
        }
    }, [animate, time]);
    return (progress / time);
};
exports.default = useProgress;
