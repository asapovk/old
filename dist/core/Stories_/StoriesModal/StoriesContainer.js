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
var useBrowser_1 = __importDefault(require("../../../hooks/useBrowser"));
var StoryItem_1 = __importDefault(require("./StoryItem"));
exports.default = (function (_a) {
    var stories = _a.stories, setModalActive = _a.setModalActive, currentStoryIndex = _a.currentStoryIndex;
    var browser = useBrowser_1.default();
    var _b = react_1.useState(0), storyWidth = _b[0], setStoryWidth = _b[1];
    var initialState = {
        currentStoryIndex: currentStoryIndex
    };
    var _c = react_1.useReducer(function (state, action) {
        switch (action.type) {
            case 'NEXT':
                return __assign({}, state, { currentStoryIndex: (state.currentStoryIndex + 1) });
            case 'PREV':
                return __assign({}, state, { currentStoryIndex: (state.currentStoryIndex - 1) });
            case 'SET':
                return __assign({}, state, { currentStoryIndex: action.payload });
            default:
                return state;
        }
    }, initialState), state = _c[0], dispatch = _c[1];
    function onNextStory() {
        if (state.currentStoryIndex === stories.length - 1) {
            return setModalActive(false);
        }
        dispatch({ type: 'NEXT' });
    }
    ;
    function onPrevStory() {
        if (state.currentStoryIndex === 0) {
            return;
        }
        dispatch({ type: 'PREV' });
    }
    var st = {
        transform: "translateX(" + ((browser.width / 2 - storyWidth / 2 - 40) - (40 * state.currentStoryIndex) - (state.currentStoryIndex * storyWidth)) + "px) translateZ(0)"
    };
    react_1.useLayoutEffect(function () {
        var el = document.getElementById('ui-stories-item-0');
        if (el) {
            setStoryWidth(el.offsetWidth);
        }
    }, [browser.width]);
    return (react_1.default.createElement("div", { style: { width: '100%', height: '100%' } },
        react_1.default.createElement("div", { className: 'ui-stories-modal-container', style: st }, stories.map(function (story, index) { return (react_1.default.createElement(StoryItem_1.default, { key: index, index: index, onClick: function () { return dispatch({ type: 'SET', payload: index }); }, story: story, active: index === state.currentStoryIndex, onNextStory: onNextStory, onPrevStory: onPrevStory, currentStoryIndex: state.currentStoryIndex })); }))));
});
