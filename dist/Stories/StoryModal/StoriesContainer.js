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
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
var __1 = require("../..");
var StoryContainer_1 = __importDefault(require("./StoryContainer"));
exports.default = (function (_a) {
    var stories = _a.stories, setModalActive = _a.setModalActive, currentStoryIndex = _a.currentStoryIndex;
    var browser = useBrowser_1.default();
    var initialState = {
        currentStoryIndex: currentStoryIndex
    };
    var _b = react_1.useReducer(function (state, action) {
        switch (action.type) {
            case 'NEXT':
                return __assign({}, state, { currentStoryIndex: (state.currentStoryIndex + 1) });
            case 'PREV':
                return __assign({}, state, { currentStoryIndex: (state.currentStoryIndex - 1) });
            default:
                return state;
        }
    }, initialState), state = _b[0], dispatch = _b[1];
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
    return (react_1.default.createElement(__1.Flexbox, { alignItems: "center", justifyContent: "center", style: { height: !browser.isMobile ? "100%" : "auto" } },
        react_1.default.createElement("div", { className: 'ui-stories-modal-container' }, stories.map(function (story, index) { return (react_1.default.createElement(StoryContainer_1.default, { key: index, story: story, active: index === state.currentStoryIndex, onNextStory: onNextStory, onPrevStory: onPrevStory, currentStoryIndex: state.currentStoryIndex })); }))));
});
