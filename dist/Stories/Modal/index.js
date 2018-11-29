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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Stories_1 = require("../Stories");
var Mask_1 = __importDefault(require("./Mask"));
var View_1 = __importDefault(require("./View"));
exports.default = (function (props) {
    var ctx = Stories_1.useStoriesContext();
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(Mask_1.default, null),
        react_1.default.createElement("div", { className: "ui-stories-modal " + (ctx.active && "ui-stories-modal-visible") },
            react_1.default.createElement(View_1.default, __assign({}, props)))));
});
{ /* <div className={`ui-stories-modal ${ctx.active && "ui-stories-modal-visible"} ${!ctx.active && "ui-stories-modal-hidding"}`}> */ }
