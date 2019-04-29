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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var __1 = require("../..");
var Form_1 = __importDefault(require("./Form"));
var Story_1 = __importDefault(require("./Story"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var onStoryClick = function () {
        var story = document.querySelector('[data-story]');
        if (story) {
            story.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };
    return (core_1.jsx(__1.Flexbox, { css: styles.container },
        core_1.jsx(Form_1.default, __assign({ onStoryClick: onStoryClick }, __assign({}, props, { styles: styles }))),
        core_1.jsx(Story_1.default, __assign({}, __assign({}, props, { styles: styles })))));
});
