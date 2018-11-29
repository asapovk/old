"use strict";
// got from React conf 2018
// don't trust this code
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useProgress = function (animate, time) {
    var _a = react_1.useState(0), progress = _a[0], setProgress = _a[1];
    react_1.useEffect(
    //@ts-ignore
    function () {
        if (animate) {
            var rafId_1 = null;
            var start_1 = null;
            var step_1 = function (timestamp) {
                if (!start_1)
                    start_1 = timestamp;
                var progress = timestamp - start_1;
                setProgress(progress);
                if (progress < time) {
                    rafId_1 = requestAnimationFrame(step_1);
                }
            };
            rafId_1 = requestAnimationFrame(step_1);
            return function () { return cancelAnimationFrame(rafId_1); };
        }
    }, [animate, time]);
    return animate ? Math.min(progress / time, time) : 0;
};
exports.default = useProgress;
