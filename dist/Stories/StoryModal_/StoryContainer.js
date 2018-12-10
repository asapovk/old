"use strict";
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
var useClass_1 = __importDefault(require("../../hooks/useClass"));
var StorySlides_1 = __importDefault(require("./StorySlides"));
exports.default = (function (_a) {
    var story = _a.story, active = _a.active, onNextStory = _a.onNextStory, onPrevStory = _a.onPrevStory, currentStoryIndex = _a.currentStoryIndex;
    var _b = useClass_1.default('ui-stories-modal-container-story'), storyContainerClassname = _b[0], storyContainerModifiers = _b[1];
    react_1.useEffect(function () {
        if (active) {
            storyContainerModifiers.addModifier('active');
        }
        else {
            storyContainerModifiers.removeModifier('active');
        }
    }, [active]);
    return (react_1.default.createElement("div", { className: storyContainerClassname },
        react_1.default.createElement(StorySlides_1.default, { active: active, onNextStory: onNextStory, onPrevStory: onPrevStory, currentStoryIndex: currentStoryIndex, slides: story.slides })));
});
