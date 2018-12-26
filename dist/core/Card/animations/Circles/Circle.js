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
var react_1 = __importDefault(require("react"));
var width = 503;
var height = 339;
exports.default = (function (props) {
    var id = Math.trunc(Math.random() * 100000);
    return (react_1.default.createElement("svg", { viewBox: "0 0 " + width + " " + height, style: __assign({ width: width * (props.size || 1), height: height * (props.size || 1) }, props.style) },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("style", null, ".wave-animation-" + id + "{fill:url(#wave-animation-" + id + ");}"),
            react_1.default.createElement("linearGradient", { id: "wave-animation-" + id, x1: 0.5, y1: 1, x2: 0.5, gradientUnits: "objectBoundingBox" },
                react_1.default.createElement("stop", { offset: 0, stopOpacity: 0.1, stopColor: props.color }),
                react_1.default.createElement("stop", { offset: 1, stopOpacity: 0, stopColor: props.color }))),
        react_1.default.createElement("ellipse", { className: "wave-animation-" + id, cx: 251.5, cy: 169.5, rx: 251.5, ry: 169.5 })));
});
