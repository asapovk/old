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
var StoriesList_1 = __importDefault(require("./StoriesList"));
var Modal_1 = __importDefault(require("./Modal"));
var StoriesContext = react_1.default.createContext({});
function useStoriesContext() {
    return react_1.useContext(StoriesContext);
}
exports.useStoriesContext = useStoriesContext;
exports.default = (function (props) {
    if (!props.stories.length)
        return null;
    var _a = react_1.useState(false), modalActive = _a[0], setModalActive = _a[1];
    var _b = react_1.useState(0), currentStoryIndex = _b[0], setCurrentStoryIndex = _b[1];
    var onModalClose = function () {
        setModalActive(false);
    };
    return (react_1.default.createElement(StoriesContext.Provider, { value: {
            active: modalActive,
            currentStoryIndex: currentStoryIndex,
            setStory: function (storyIndex) { return setCurrentStoryIndex(storyIndex); },
            modalOpen: function () { return setModalActive(true); },
            modalClose: function () { return onModalClose(); }
        } },
        react_1.default.createElement(StoriesList_1.default, __assign({}, props)),
        modalActive && react_1.default.createElement(Modal_1.default, { stories: props.stories })));
});
