"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var Stories_1 = require("../Stories");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var ctx = Stories_1.useStoriesContext();
    var browser = useBrowser_1.default();
    if (ctx.currentStoryIndex === props.storiesLength - 1)
        return null;
    return (react_1.default.createElement("div", { className: 'ui-stories-modal-prevstory', style: { marginRight: !browser.isMobile ? '-2.5rem' : '0' } },
        react_1.default.createElement(__1.Flexbox, { style: { height: '100%' }, justifyContent: 'center', alignItems: 'center', onClick: function () { return props.onNext(); } },
            react_1.default.createElement(__1.Icon, { type: "right" }))));
});
