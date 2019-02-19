"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var size = useBrowser_1.default();
    var styles = props.styles;
    return (core_1.jsx("div", { css: styles.story.container }, props.story));
});
