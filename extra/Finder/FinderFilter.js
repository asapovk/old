"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var TextField_1 = require("../../core/TextField");
var styles_1 = __importDefault(require("./styles"));
var FinderFilter = function (props) {
    var placeholder = props.placeholder, clearable = props.clearable;
    var input = react_1.useRef();
    var styles = styles_1.default();
    var onChange = function (event) {
        if (!event) {
            props.onChange("", props.level);
            input.current.value = "";
        }
        else {
            props.onChange && props.onChange(event.target.value, props.level);
        }
    };
    return (core_1.jsx("div", { css: styles.filter },
        core_1.jsx(TextField_1.TextField, { leftIcon: 'search', size: 'small', placeholder: placeholder, onChange: onChange })));
};
exports.default = FinderFilter;
