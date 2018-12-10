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
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
exports.default = (function (_a) {
    var active = _a.active, story = _a.story, index = _a.index, onClick = _a.onClick, onNextStory = _a.onNextStory, onPrevStory = _a.onPrevStory, currentStoryIndex = _a.currentStoryIndex;
    var _b = useClass_1.default('ui-stories-modal-container-story'), storyContainerClassname = _b[0], storyContainerModifiers = _b[1];
    var styles = useStyles_1.default();
    react_1.useEffect(function () {
        if (active) {
            storyContainerModifiers.addModifier('active');
        }
        else {
            storyContainerModifiers.removeModifier('active');
        }
    }, [active]);
    return (react_1.default.createElement("div", { id: "ui-stories-item-" + index, className: storyContainerClassname, onClick: function () { return onClick(); }, style: {
            backgroundImage: "url(" + story.image + ")",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            borderColor: styles.theme.borders.table.color
        } }));
});
