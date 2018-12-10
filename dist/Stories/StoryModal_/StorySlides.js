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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Slide_1 = __importDefault(require("./Slide"));
var ProgressBar_1 = __importDefault(require("./ProgressBar"));
var SLIDE_DURATION = 3000;
exports.default = (function (_a) {
    var active = _a.active, slides = _a.slides, onNextStory = _a.onNextStory, onPrevStory = _a.onPrevStory, currentStoryIndex = _a.currentStoryIndex;
    var initialState = {
        activeSlide: 0,
        isPlaying: true
    };
    var _b = react_1.useReducer(function (state, action) {
        switch (action.type) {
            case 'INITIAL':
                return initialState;
            case 'PAUSE':
                return __assign({}, state, { isPlaying: false });
            case 'CONTINUE':
                return __assign({}, state, { isPlaying: true });
            case 'NEXT':
                return __assign({}, state, { activeSlide: (state.activeSlide + 1) });
            case 'PREVIOUS':
                return __assign({}, state, { activeSlide: (state.activeSlide - 1) });
            default:
                return state;
        }
    }, initialState), state = _b[0], dispatch = _b[1];
    function onNextSlide() {
        if (state.activeSlide === slides.length - 1) {
            return onNextStory();
        }
        dispatch({ type: 'NEXT' });
    }
    function onPrevSlide() {
        if (state.activeSlide === 0) {
            if (currentStoryIndex === 0) {
                return dispatch({ type: 'INITIAL' });
            }
            return onPrevStory();
        }
        dispatch({ type: 'PREVIOUS' });
    }
    function onPause() {
        if (state.isPlaying) {
            return dispatch({ type: 'PAUSE' });
        }
        dispatch({ type: 'CONTINUE' });
    }
    react_1.useEffect(function () { return dispatch({ type: 'INITIAL' }); }, [currentStoryIndex]);
    return (react_1.default.createElement("div", { style: { height: '100%' }, className: 'ui-stories-modal-container-story-slides' },
        react_1.default.createElement("div", { style: { position: 'absolute', left: 0, top: -10, right: 0, display: 'flex', flexDirection: 'row' } }, slides.map(function (slide, index) { return (react_1.default.createElement(ProgressBar_1.default, { key: currentStoryIndex + '-' + index, isPlaying: state.isPlaying, isCurrent: index === state.activeSlide, isPassed: state.activeSlide > index, duration: SLIDE_DURATION, onPassed: onNextSlide })); })),
        slides.map(function (slide, index) { return (react_1.default.createElement(Slide_1.default, { key: index, isCurrent: state.activeSlide === index, image: slide.image, children: slide.text, onPause: onPause })); })));
});
