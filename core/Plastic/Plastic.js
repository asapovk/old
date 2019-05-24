"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var visa_1 = __importDefault(require("./svg/visa"));
var mc_1 = __importDefault(require("./svg/mc"));
var mir_1 = __importDefault(require("./svg/mir"));
exports.default = (function (props) {
    var style = styles_1.default({
        isActive: props.active,
        cardColor: props.color,
        cardBackground: props.background,
        stackOffset: props.__stackOffset,
        stackPosition: props.__stackPosition,
        stackDirection: props.__stackDirection,
    });
    var pan = props.pan || "";
    if (pan.length > 4) {
        pan = pan.slice(pan.length - 4, pan.length);
    }
    pan = (pan != "") ? "\u2022\u2022\u2022\u2022 " + pan : '';
    return (core_1.jsx("div", { css: style.card, onClick: props.onClick },
        core_1.jsx("span", { css: style.type },
            props.type === 'VISA' && core_1.jsx(visa_1.default, null),
            props.type === 'MASTERCARD' && core_1.jsx(mc_1.default, null),
            props.type === 'MAESTRO' && core_1.jsx(mc_1.default, null),
            props.type === 'MIR' && core_1.jsx(mir_1.default, null)),
        core_1.jsx("span", { css: style.pan }, pan),
        props.type === 'EMPTY' && (core_1.jsx("div", { css: style.emptyText }, "\u041D\u0435\u0442"))));
});
