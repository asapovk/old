"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var Title = function (props) {
    var children = props.children, style = props.style, value = props.value, defaultValue = props.defaultValue, onLabel = props.onLabel, offLabel = props.offLabel;
    var _a = react_1.useState(false), state = _a[0], setState = _a[1];
    var styles = styles_1.default(state);
    var onChange = function (on) {
        setState(on);
        props.onChange && props.onChange(on);
    };
    react_1.useLayoutEffect(function () {
        setState((typeof value !== "undefined") ? value : (defaultValue || false));
    }, []);
    return (core_1.jsx(__1.Flexbox, { style: style, css: styles.root },
        children,
        (typeof onChange === "function") ? (core_1.jsx(__1.Flexbox, { css: styles.switchWrap },
            core_1.jsx("div", { css: styles.switchTitle(state), onClick: function () { return onChange(true); }, children: onLabel || "ВКЛ" }),
            core_1.jsx("div", { onClick: function () { return onChange(!state); }, children: core_1.jsx("div", { css: styles.switch, children: core_1.jsx("span", null) }) }),
            core_1.jsx("div", { css: styles.switchTitle(!state), onClick: function () { return onChange(false); }, children: offLabel || "ВЫКЛ" }))) : null));
};
exports.default = Title;
