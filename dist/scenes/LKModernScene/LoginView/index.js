"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var core_2 = require("../../../core");
var Background_1 = __importDefault(require("./components/Background"));
var Content_1 = __importDefault(require("./components/Content"));
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var _a = react_1.useState(true), active = _a[0], setActive = _a[1];
    var setView = props.setView;
    return (core_1.jsx(core_2.Flexbox, { column: true, css: styles.container },
        core_1.jsx(Background_1.default, { active: active, setView: setView }),
        core_1.jsx(Content_1.default, { active: active, setActive: setActive })));
});
