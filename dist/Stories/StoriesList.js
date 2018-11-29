"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    function StoryLabel(_a) {
        var story = _a.story;
        return (react_1.default.createElement("div", { className: 'ui-stories-items-label', style: { color: story.labelColor || '#fff' }, children: story.label }));
    }
    return (react_1.default.createElement(__1.Flexbox, { className: 'ui-stories', flexDirection: 'column' },
        react_1.default.createElement("div", { className: 'ui-stories-title' }, props.title),
        react_1.default.createElement(__1.Flexbox, { className: 'ui-stories-items' }, props.stories.map(function (story, index) { return (react_1.default.createElement(__1.Flexbox, { key: index, className: 'ui-stories-items-item', style: {
                backgroundImage: "url(" + story.image + ")",
            }, onClick: function () {
                props.setStory(index);
                props.setModalActive(true);
            }, alignItems: 'flex-end', children: react_1.default.createElement(StoryLabel, { story: story }) })); }))));
});
