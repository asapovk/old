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
var width = 3900;
var height = 90;
exports.default = (function (props) {
    var id = Math.trunc(Math.random() * 100000);
    return (react_1.default.createElement("svg", { className: props.className, viewBox: "0 0 " + width + " " + height, style: __assign({ width: width * (props.size || 1), height: height * (props.size || 1) }, props.style) },
        react_1.default.createElement("defs", null,
            react_1.default.createElement("style", null, ".wave-animation-" + id + "{fill:url(#wave-animation-" + id + ");}"),
            react_1.default.createElement("linearGradient", { id: "wave-animation-" + id, x1: 0.5, y1: 1, x2: 0.5, gradientUnits: "objectBoundingBox" },
                react_1.default.createElement("stop", { offset: 0, stopOpacity: 0, stopColor: props.color }),
                react_1.default.createElement("stop", { offset: 1, stopOpacity: 0.1, stopColor: props.color }))),
        react_1.default.createElement("path", { className: "wave-animation-" + id, d: "M3900,90V17.4C3876.7,6.4,3848.8,0,3818.9,0s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4V17C2576.7,6,2548.8-.4,2518.9-.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4S2135.8,6,2112.5,17s-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2c-23.3-11-51.2-17.4-81.1-17.4s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2A205.393,205.393,0,0,0,893.9,0C864,0,835.8,6.5,812.5,17.5s-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2C626.7,6.4,598.8,0,568.9,0s-58.1,6.5-81.4,17.5-51.4,17.4-81.4,17.4c-29.9,0-57.8-6.4-81.1-17.4v-.2C301.7,6.4,273.8,0,243.9,0s-58.1,6.5-81.4,17.5S111.1,34.9,81.1,34.9C51.2,34.9,23.3,28.5,0,17.5V90Z" })));
});
