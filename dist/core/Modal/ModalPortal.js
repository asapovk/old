"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = __importDefault(require("react-dom"));
exports.default = (function (props) {
    return react_dom_1.default.createPortal(props.children, document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364') || document.body);
});
