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
exports.default = (function (props) {
    var _a = react_1.useState(props.checked || props.defaultValue || false), checked = _a[0], setChecked = _a[1];
    var style = props.style, label = props.label, uppercase = props.uppercase, radio = props.radio, className = props.className, size = props.size, labelColor = props.labelColor;
    var styles = styles_1.default(checked, radio, uppercase, size);
    react_1.useEffect(function () {
        if (typeof props.checked !== "undefined") {
            setChecked(props.checked);
        }
    }, [props.checked]);
    function onClick() {
        props.onChange && props.onChange(!checked);
        if (typeof props.checked === "undefined") {
            setChecked(!checked);
        }
    }
    return (core_1.jsx("div", { css: styles.container, onClick: onClick, style: style, className: className },
        core_1.jsx("div", { css: styles.input, children: checked && (radio
                ? core_1.jsx("div", null)
                : core_1.jsx(__1.Icon, { type: 'check' })) }),
        core_1.jsx("div", { css: styles.label(labelColor), children: label })));
});
