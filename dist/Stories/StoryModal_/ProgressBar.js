"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var st = {
    progressWrapper: {
        display: "inline-block", width: 100, height: 10, background: 'black', margin: 2
    },
    progress: {
        background: "red",
        height: 10,
    }
};
var AnimationControl = function (el, duration, _cb) {
    function whichTransitionEvent(el) {
        if (!el)
            return false;
        var t;
        var transitions = {
            'transition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'MozTransition': 'transitionend',
            'WebkitTransition': 'webkitTransitionEnd'
        };
        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    }
    var t = whichTransitionEvent(el);
    if (t) {
        el.addEventListener(t, function (e) {
            typeof _cb === "function" && _cb();
        });
    }
    else {
        setTimeout(function (_) {
            typeof _cb === "function" && _cb();
        }, duration);
    }
};
function TestApp(props) {
    var isPlaying = props.isPlaying, isCurrent = props.isCurrent, isPassed = props.isPassed, onPassed = props.onPassed, duration = props.duration;
    var _a = react_1.useState(0), width = _a[0], setWidth = _a[1];
    var _b = react_1.useState(duration / 1000), transition = _b[0], setTransition = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        var passOnComplete = true;
        if (ref.current) {
            if (isPlaying) {
                if (isCurrent) {
                    if (transition !== 0) {
                        setWidth(100);
                        AnimationControl(ref.current, duration, function () {
                            if (passOnComplete) {
                                onPassed();
                            }
                        });
                    }
                    else {
                        if (width === 100) {
                            setWidth(0);
                        }
                        setTimeout(function () {
                            setTransition(duration / 1000);
                        }, 100);
                    }
                }
                else {
                    setTransition(0);
                    if (isPassed) {
                        setWidth(100);
                    }
                    else {
                        setWidth(0);
                    }
                }
            }
            else {
                setTransition(0);
                setWidth(ref.current.offsetWidth);
            }
        }
        return function () {
            passOnComplete = false;
        };
    }, [isCurrent, isPassed, isPlaying, transition]);
    return (react_1.default.createElement("div", { style: st.progressWrapper },
        react_1.default.createElement("div", { ref: ref, style: __assign({}, st.progress, { width: width + "%", transition: "all " + transition + "s linear" }) })));
}
exports.default = TestApp;
