"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
exports.default = (function (props) {
    if (!props.stories.length)
        return null;
    var styles = useStyles_1.default();
    return (react_1.default.createElement(__1.Flexbox, { className: 'ui-stories', flexDirection: 'column' },
        react_1.default.createElement("div", { className: 'ui-stories-title' }, props.title),
        react_1.default.createElement(__1.Flexbox, { className: 'ui-stories-items', flex: 1 }, props.stories.map(function (story, index) { return (react_1.default.createElement(__1.Flexbox, { key: index, className: 'ui-stories-items-item', style: {
                backgroundImage: "url(" + story.image + ")",
                borderColor: !story.read ? styles.theme.highlight.rgba(.7) : 'transparent'
            }, onClick: function () {
                story.onClick && story.onClick();
            }, alignItems: 'flex-end' },
            react_1.default.createElement("div", { className: 'ui-stories-items-label', style: { color: story.labelColor || '#fff' } }, story.label))); }))));
});
