"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.default = (function (props) {
    var onClick = props.onClick, text = props.text, value = props.value, className = props.className;
    return (react_1.default.createElement("div", { className: className, onClick: function () { return onClick && onClick(value); }, children: text }));
});
