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
var __1 = require("../..");
var Main_1 = __importDefault(require("./Main"));
var Footer_1 = __importDefault(require("./Footer"));
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    return (react_1.default.createElement(__1.Flexbox, { style: { height: "100%" }, flexDirection: "column" },
        react_1.default.createElement(Main_1.default, __assign({}, props)),
        react_1.default.createElement(Footer_1.default, __assign({}, props))));
});
