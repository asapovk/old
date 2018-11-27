"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
var Stories_1 = require("./Stories");
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var ctx = Stories_1.useStoriesContext();
    return (react_1.default.createElement(__1.Flexbox, { className: 'ui-stories', flexDirection: 'column' },
        react_1.default.createElement("div", { className: 'ui-stories-title' }, props.title),
        react_1.default.createElement(__1.Flexbox, { className: 'ui-stories-items' }, props.stories.map(function (story, index) { return (react_1.default.createElement(__1.Flexbox, { key: index, className: 'ui-stories-items-item', style: {
                backgroundImage: "url(" + story.image + ")",
                borderColor: !story.read ? styles.theme.highlight.rgba(.7) : 'transparent'
            }, onClick: function () {
                ctx.setStory(index);
                ctx.modalOpen();
            }, alignItems: 'flex-end' },
            react_1.default.createElement("div", { className: 'ui-stories-items-label', style: { color: story.labelColor || '#fff' } }, story.label))); }))));
});
