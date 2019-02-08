"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useStyles_1 = __importDefault(require("./useStyles"));
var react_1 = require("react");
require('../lib/TweenMax.min');
require('../lib/MorphSVGPlugin.min');
exports.default = react_1.forwardRef(function (props, ref) {
    var styles = useStyles_1.default();
    var timeline;
    var ease = Power0.easeNone;
    var buddy;
    var buddyContainer;
    var buddyMouth;
    var buddyBrouwLeft;
    var buddyBrouwRight;
    var buddyEyes;
    var buddyBrouws;
    var PATH_STATES = {};
    var cursorPos = { x: 0, y: 0 };
    var BUDDY_ID = "_" + (Math.random() * 10000000).toFixed(0);
    react_1.useImperativeMethods(ref, function () { return ({
        makeJumpy: function () {
            makeJumpy();
        },
        makeHappy: function () {
            makeHappy();
        },
        makeSad: function () {
            makeSad();
        },
        makeNormal: function () {
            makeNormal();
        },
        stopAnimation: function () {
            stopAnimation();
        }
    }); });
    /**
     * ComponentDidMount
     */
    react_1.useEffect(function () {
        buddy = window.document.getElementById("buddy" + BUDDY_ID);
        buddyContainer = window.document.getElementById("buddyContainer" + BUDDY_ID);
        buddyMouth = window.document.getElementById("buddyMouth" + BUDDY_ID);
        buddyBrouwLeft = window.document.getElementById("buddyBrouwLeft" + BUDDY_ID);
        buddyBrouwRight = window.document.getElementById("buddyBrouwRight" + BUDDY_ID);
        buddyEyes = window.document.getElementsByClassName("buddyEye");
        buddyBrouws = window.document.getElementsByClassName("buddyBrouw");
        PATH_STATES = {};
        cursorPos = { x: 0, y: 0 };
        var nodeList = window.document.querySelectorAll('#buddyStates' + BUDDY_ID + ' > *');
        [].forEach.call(nodeList, function (el) {
            var key = el.getAttribute("data-id");
            PATH_STATES[key] = el;
        });
        window.addEventListener("mousemove", moveEyes);
        window.addEventListener("touchmove", moveEyes);
    }, []);
    /**
     * ComponentWillRecieveProps and DidUnmount (return)
     */
    react_1.useEffect(function () {
        switch (props.defaultFace) {
            case 'happy':
                makeHappy(true);
                break;
            case 'sad':
                makeSad(true);
                break;
            case 'normal':
                makeNormal(true);
                break;
            default: makeHappy(true);
        }
        return function () {
            window.removeEventListener("mousemove", moveEyes);
            window.removeEventListener("touchmove", moveEyes);
        };
    }, [props.defaultFace]);
    function makeHappy(instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthHappy, ease: ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftHappy, ease: ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightHappy, ease: ease });
    }
    function makeNormal(instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthNormal, ease: ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftNormal, ease: ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightNormal, ease: ease });
    }
    function makeSad(instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax.to(buddyMouth, speed, { morphSVG: PATH_STATES.mouthSad, ease: ease });
        TweenMax.to(buddyBrouwLeft, speed, { morphSVG: PATH_STATES.brouwLeftSad, ease: ease });
        TweenMax.to(buddyBrouwRight, speed, { morphSVG: PATH_STATES.brouwRightSad, ease: ease });
    }
    function makeJumpy(repeat) {
        if (repeat === void 0) { repeat = 0; }
        var speed = 0.15;
        //@ts-ignore TimelineMax
        timeline = new TimelineMax({ repeat: repeat, repeatDelay: 0, delay: 0.5, paused: true });
        timeline
            .to(buddyContainer, speed, { y: -20, ease: ease })
            .to(buddyContainer, speed, { y: 0, ease: ease })
            .to(buddyContainer, speed, { y: -10, ease: ease })
            .to(buddyContainer, speed, { y: 0, ease: ease })
            .to(buddyContainer, speed, { y: -5, ease: ease })
            .to(buddyContainer, speed, { y: 0, ease: ease });
        timeline.play();
    }
    function stopAnimation() {
        if (timeline) {
            timeline.stop();
            timeline = null;
        }
    }
    function moveEyes(e, isTouch) {
        if (isTouch) {
            cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY };
        }
        else {
            cursorPos = { x: e.clientX, y: e.clientY };
        }
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var getOffset = function (el) {
            el = el.getBoundingClientRect();
            return { x: el.left + window.scrollX, y: el.top + window.scrollY };
        };
        var action = function (el) {
            var elOffset = getOffset(el);
            var bBox = el.getBBox();
            var centerX = elOffset.x + bBox.width / 2;
            var centerY = elOffset.y + bBox.height / 2;
            var percentTop = Math.round((cursorPos.y - centerY) * 100 / windowHeight);
            var percentLeft = Math.round((cursorPos.x - centerX) * 100 / windowWidth);
            el.style.transform = "translate(" + percentLeft / 5 + "px, " + percentTop / 5 + "px)";
        };
        for (var i = 0; i < buddyEyes.length; ++i) {
            action(buddyEyes[i]);
        }
        for (var i = 0; i < buddyBrouws.length; ++i) {
            action(buddyBrouws[i]);
        }
    }
    var st = {
        eye: { fill: "url(#BUDDY_GRADIENT)" },
        brouw: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 8, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        nouse: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        mouth: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 17, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
        hide: { opacity: 0 }
    };
    var style = {
        width: (props.size || 1) * 3 + "rem",
        height: (props.size || 1) * 3 + "rem"
    };
    return (core_1.jsx("div", { id: "buddy" + BUDDY_ID, style: style },
        core_1.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 220 225" },
            core_1.jsx("defs", null,
                core_1.jsx("linearGradient", { id: "BUDDY_GRADIENT", gradientUnits: "userSpaceOnUse", x1: "395.3553", y1: "290.6671", x2: "15.3163", y2: "134.3555", gradientTransform: "matrix(1 0 0 -1 0 222.84)" },
                    core_1.jsx("stop", { offset: "0", style: { stopColor: styles.theme.gradient.buddy[0] } }),
                    core_1.jsx("stop", { offset: "1", style: { stopColor: styles.theme.gradient.buddy[1] } }))),
            core_1.jsx("g", { id: "buddyContainer" + BUDDY_ID },
                core_1.jsx("path", { className: "buddyBrouw", id: "buddyBrouwLeft" + BUDDY_ID, style: st.brouw, d: "M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                core_1.jsx("path", { className: "buddyBrouw", id: "buddyBrouwRight" + BUDDY_ID, style: st.brouw, d: "M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                core_1.jsx("circle", { className: "buddyEye", style: st.eye, cx: "58.1", cy: "70.9", r: "17.8" }),
                core_1.jsx("circle", { className: "buddyEye", style: st.eye, cx: "155.8", cy: "70.9", r: "17.8" }),
                core_1.jsx("path", { id: "buddyMouth" + BUDDY_ID, style: st.mouth, d: "M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" }),
                core_1.jsx("g", { style: st.hide, id: "buddyStates" + BUDDY_ID },
                    core_1.jsx("path", { "data-id": "mouthNormal", id: "buddyMouthStateNormal" + BUDDY_ID, d: "M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" }),
                    core_1.jsx("path", { "data-id": "mouthHappy", id: "buddyMouthStateHappy" + BUDDY_ID, d: "M185.3,160c0,0-25.8,25.2-75.3,25.4c-43.7,0.2-75.3-24.6-75.3-24.6" }),
                    core_1.jsx("path", { "data-id": "mouthSad", id: "buddyMouthStateSad" + BUDDY_ID, d: "M154.8,165.6c0,0-19.4-10.1-50.4-7.7C72.5,160.5,54,177.2,54,177.2" }),
                    core_1.jsx("path", { "data-id": "brouwLeftNormal", id: "buddyBrouwLeftStateNormal" + BUDDY_ID, d: "M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                    core_1.jsx("path", { "data-id": "brouwRightNormal", id: "buddyBrouwRightStateNormal" + BUDDY_ID, d: "M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                    core_1.jsx("path", { "data-id": "brouwLeftHappy", id: "buddyBrouwLeftStateHappy" + BUDDY_ID, d: "M71.6,36.2c0,0-5.1-2.2-13.5-2.3c-9.5-0.1-18.6,5.5-18.6,5.5" }),
                    core_1.jsx("path", { "data-id": "brouwRightHappy", id: "buddyBrouwRightStateHappy" + BUDDY_ID, d: "M173.6,39.9c0,0-4.7-2.9-13-4.4c-9.4-1.6-19.2,2.5-19.2,2.5" }),
                    core_1.jsx("path", { "data-id": "brouwLeftSad", id: "buddyBrouwLeftStateSad" + BUDDY_ID, d: "M58.1,39c0,0-6.5,0.9-11.5,3.6c-5,2.7-7.2,6.4-7.2,6.4" }),
                    core_1.jsx("path", { "data-id": "brouwRightSad", id: "buddyBrouwRightStateSad" + BUDDY_ID, d: "M175.7,49.8c0,0-2.1-3.6-6.7-6.8c-4.2-3-11-3.1-11-3.1" }))))));
});
