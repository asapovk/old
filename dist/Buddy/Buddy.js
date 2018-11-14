"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TweenMax_min_1 = __importDefault(require("./lib/TweenMax.min"));
var index_1 = require("../index");
//@ts-ignore
var ease = Power0.easeNone;
var Buddy = /** @class */ (function (_super) {
    __extends(Buddy, _super);
    function Buddy(props) {
        var _this = _super.call(this, props) || this;
        _this.PATH_STATES = {};
        _this.cursorPos = { x: 0, y: 0 };
        require('./lib/MorphSVGPlugin.min');
        _this.BUDDY_ID = "_" + (Math.random() * 10000000).toFixed(0);
        /**
         * Для нормальной работы EventListener'a
         */
        _this.moveEyes = _this.moveEyes.bind(_this);
        return _this;
    }
    Buddy.prototype.init = function () {
        var _this = this;
        this.buddy = window.document.getElementById("buddy" + this.BUDDY_ID);
        this.buddyContainer = window.document.getElementById("buddyContainer" + this.BUDDY_ID);
        this.buddyMouth = window.document.getElementById("buddyMouth" + this.BUDDY_ID);
        this.buddyBrouwLeft = window.document.getElementById("buddyBrouwLeft" + this.BUDDY_ID);
        this.buddyBrouwRight = window.document.getElementById("buddyBrouwRight" + this.BUDDY_ID);
        this.buddyEyes = window.document.getElementsByClassName("buddyEye");
        this.buddyBrouws = window.document.getElementsByClassName("buddyBrouw");
        this.PATH_STATES = {};
        this.cursorPos = { x: 0, y: 0 };
        var nodeList = window.document.querySelectorAll('#buddyStates' + this.BUDDY_ID + ' > *');
        [].forEach.call(nodeList, function (el) {
            var key = el.getAttribute("data-id");
            _this.PATH_STATES[key] = el;
        });
    };
    /**
     * Счастливый
     */
    Buddy.prototype.makeHappy = function (instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax_min_1.default.to(this.buddyMouth, speed, { morphSVG: this.PATH_STATES.mouthHappy, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwLeft, speed, { morphSVG: this.PATH_STATES.brouwLeftHappy, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwRight, speed, { morphSVG: this.PATH_STATES.brouwRightHappy, ease: ease });
    };
    /**
     * Обычный
     */
    Buddy.prototype.makeNormal = function (instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax_min_1.default.to(this.buddyMouth, speed, { morphSVG: this.PATH_STATES.mouthNormal, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwLeft, speed, { morphSVG: this.PATH_STATES.brouwLeftNormal, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwRight, speed, { morphSVG: this.PATH_STATES.brouwRightNormal, ease: ease });
    };
    /**
     * Грустный
     */
    Buddy.prototype.makeSad = function (instant) {
        if (instant === void 0) { instant = false; }
        var speed = instant ? 0 : 0.2;
        TweenMax_min_1.default.to(this.buddyMouth, speed, { morphSVG: this.PATH_STATES.mouthSad, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwLeft, speed, { morphSVG: this.PATH_STATES.brouwLeftSad, ease: ease });
        TweenMax_min_1.default.to(this.buddyBrouwRight, speed, { morphSVG: this.PATH_STATES.brouwRightSad, ease: ease });
    };
    /**
     * Попрыгун
     */
    Buddy.prototype.makeJumpy = function (repeat) {
        if (repeat === void 0) { repeat = 0; }
        var speed = 0.15;
        //@ts-ignore TimelineMax
        this.timeline = new TimelineMax({ repeat: repeat, repeatDelay: 0, delay: 0.5, paused: true });
        this.timeline
            .to(this.buddyContainer, speed, { y: -20, ease: ease })
            .to(this.buddyContainer, speed, { y: 0, ease: ease })
            .to(this.buddyContainer, speed, { y: -10, ease: ease })
            .to(this.buddyContainer, speed, { y: 0, ease: ease })
            .to(this.buddyContainer, speed, { y: -5, ease: ease })
            .to(this.buddyContainer, speed, { y: 0, ease: ease });
        this.timeline.play();
    };
    Buddy.prototype.stopAnimation = function () {
        if (this.timeline) {
            this.timeline.stop();
            this.timeline = null;
        }
    };
    Buddy.prototype.setListenersEnabled = function (active) {
        if (active === void 0) { active = false; }
        if (active) {
            window.addEventListener("mousemove", this.moveEyes);
            window.addEventListener("touchmove", this.moveEyes);
        }
        else {
            window.removeEventListener("mousemove", this.moveEyes);
            window.removeEventListener("touchmove", this.moveEyes);
        }
    };
    Buddy.prototype.moveEyes = function (e, isTouch) {
        var _this = this;
        if (isTouch) {
            this.cursorPos = { x: e.targetTouches[0].offsetX, y: e.targetTouches[0].offsetY };
        }
        else {
            this.cursorPos = { x: e.clientX, y: e.clientY };
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
            var percentTop = Math.round((_this.cursorPos.y - centerY) * 100 / windowHeight);
            var percentLeft = Math.round((_this.cursorPos.x - centerX) * 100 / windowWidth);
            el.style.transform = "translate(" + percentLeft / 5 + "px, " + percentTop / 5 + "px)";
        };
        for (var i = 0; i < this.buddyEyes.length; ++i) {
            action(this.buddyEyes[i]);
        }
        for (var i = 0; i < this.buddyBrouws.length; ++i) {
            action(this.buddyBrouws[i]);
        }
    };
    Buddy.prototype.componentDidMount = function () {
        this.init();
        this.setListenersEnabled(true);
        switch (this.props.defaultFace) {
            case 'happy':
                this.makeHappy(true);
                break;
            case 'sad':
                this.makeSad(true);
                break;
        }
    };
    Buddy.prototype.componentWillUnmount = function () {
        this.setListenersEnabled(false);
    };
    Buddy.prototype.render = function () {
        var _this = this;
        var st = {
            eye: { fill: "url(#BUDDY_GRADIENT)" },
            brouw: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 8, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
            nouse: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 10, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
            mouth: { fill: "none", stroke: "url(#BUDDY_GRADIENT)", strokeWidth: 17, strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: 10 },
            hide: { opacity: 0 }
        };
        var style = {
            width: (this.props.size || 1) * 3 + "rem",
            height: (this.props.size || 1) * 3 + "rem"
        };
        return (react_1.default.createElement(index_1.Styles, null, function (styles) { return (react_1.default.createElement("div", { id: "buddy" + _this.BUDDY_ID, style: style },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 220 225" },
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("linearGradient", { id: "BUDDY_GRADIENT", gradientUnits: "userSpaceOnUse", x1: "395.3553", y1: "290.6671", x2: "15.3163", y2: "134.3555", gradientTransform: "matrix(1 0 0 -1 0 222.84)" },
                        react_1.default.createElement("stop", { offset: "0", style: { stopColor: styles.theme.gradient.buddy[0] } }),
                        react_1.default.createElement("stop", { offset: "1", style: { stopColor: styles.theme.gradient.buddy[1] } }))),
                react_1.default.createElement("g", { id: "buddyContainer" + _this.BUDDY_ID },
                    react_1.default.createElement("path", { className: "buddyBrouw", id: "buddyBrouwLeft" + _this.BUDDY_ID, style: st.brouw, d: "M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                    react_1.default.createElement("path", { className: "buddyBrouw", id: "buddyBrouwRight" + _this.BUDDY_ID, style: st.brouw, d: "M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                    react_1.default.createElement("circle", { className: "buddyEye", style: st.eye, cx: "58.1", cy: "70.9", r: "17.8" }),
                    react_1.default.createElement("circle", { className: "buddyEye", style: st.eye, cx: "155.8", cy: "70.9", r: "17.8" }),
                    react_1.default.createElement("path", { id: "buddyMouth" + _this.BUDDY_ID, style: st.mouth, d: "M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" }),
                    react_1.default.createElement("g", { style: st.hide, id: "buddyStates" + _this.BUDDY_ID },
                        react_1.default.createElement("path", { "data-id": "mouthNormal", id: "buddyMouthStateNormal" + _this.BUDDY_ID, d: "M184.6,167.3c0,0-26.5,5.1-76,5.4C65,172.9,34,168.1,34,168.1" }),
                        react_1.default.createElement("path", { "data-id": "mouthHappy", id: "buddyMouthStateHappy" + _this.BUDDY_ID, d: "M185.3,160c0,0-25.8,25.2-75.3,25.4c-43.7,0.2-75.3-24.6-75.3-24.6" }),
                        react_1.default.createElement("path", { "data-id": "mouthSad", id: "buddyMouthStateSad" + _this.BUDDY_ID, d: "M154.8,165.6c0,0-19.4-10.1-50.4-7.7C72.5,160.5,54,177.2,54,177.2" }),
                        react_1.default.createElement("path", { "data-id": "brouwLeftNormal", id: "buddyBrouwLeftStateNormal" + _this.BUDDY_ID, d: "M65.5,37.6c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                        react_1.default.createElement("path", { "data-id": "brouwRightNormal", id: "buddyBrouwRightStateNormal" + _this.BUDDY_ID, d: "M167,36.2c0,0-4.5,0-8,0c-3.2,0-10.5,0-10.5,0" }),
                        react_1.default.createElement("path", { "data-id": "brouwLeftHappy", id: "buddyBrouwLeftStateHappy" + _this.BUDDY_ID, d: "M71.6,36.2c0,0-5.1-2.2-13.5-2.3c-9.5-0.1-18.6,5.5-18.6,5.5" }),
                        react_1.default.createElement("path", { "data-id": "brouwRightHappy", id: "buddyBrouwRightStateHappy" + _this.BUDDY_ID, d: "M173.6,39.9c0,0-4.7-2.9-13-4.4c-9.4-1.6-19.2,2.5-19.2,2.5" }),
                        react_1.default.createElement("path", { "data-id": "brouwLeftSad", id: "buddyBrouwLeftStateSad" + _this.BUDDY_ID, d: "M58.1,39c0,0-6.5,0.9-11.5,3.6c-5,2.7-7.2,6.4-7.2,6.4" }),
                        react_1.default.createElement("path", { "data-id": "brouwRightSad", id: "buddyBrouwRightStateSad" + _this.BUDDY_ID, d: "M175.7,49.8c0,0-2.1-3.6-6.7-6.8c-4.2-3-11-3.1-11-3.1" })))))); }));
    };
    Buddy.defaultProps = {
        defaultFace: "happy"
    };
    return Buddy;
}(react_1.Component));
exports.default = Buddy;
