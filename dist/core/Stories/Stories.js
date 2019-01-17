"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./Styles"));
var react_1 = require("react");
var hooks_1 = require("../../hooks");
var storiesData = new Array(5).fill(1);
exports.default = (function () {
    var browser = hooks_1.useBrowser();
    var _a = react_1.useState(-1), active = _a[0], setActive = _a[1];
    var _b = react_1.useState(0), position = _b[0], setPosition = _b[1];
    react_1.useEffect(function () {
        changeStoryViewPos();
    }, [browser.height, browser.width, active]);
    function changeStoryViewPos() {
        var wrapper = document.getElementById("fullstories");
        if (wrapper) {
            var el = wrapper.childNodes[0];
            setPosition((browser.width / 2 - (el.offsetWidth / 2 + 40)) - (Math.max(active, 0) * (el.offsetWidth + 40)));
        }
    }
    var styles = styles_1.default(active, position);
    return (core_1.jsx("div", { css: styles.container },
        storiesData.map(function (_, index) { return (core_1.jsx("div", { css: styles.minifiedStory, onClick: function () { return setActive(index); } }, "Some text here")); }),
        core_1.jsx("div", { css: styles.modal },
            core_1.jsx("div", { css: styles.fullStoriesList, id: "fullstories" }, storiesData.map(function (_, index) { return (
            // <div css={styles.fullStoryWrapper}>
            core_1.jsx("div", { id: "fullstory-" + index, css: styles.fullStory, onClick: function () { return setActive(index); } }, index)
            // </div>
            ); })))));
});
