"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var __1 = require("..");
exports.default = react_1.forwardRef(function (props, ref) {
    var _a = react_1.useState(null), content = _a[0], setContent = _a[1];
    var ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
    react_1.useImperativeHandle(ref, function () { return ({
        open: function (content) {
            setContent(content);
        },
        close: function () {
            setContent(null);
        }
    }); });
    if (content) {
        return react_dom_1.default.createPortal(core_1.jsx('div', {
            css: function (theme) { return core_1.css({
                position: 'fixed',
                zIndex: 500,
            }); }
        }, core_1.jsx(ModalView, { onClose: function () { return setContent(null); } }, content)), ViewportHTML ? ViewportHTML : document.body);
    }
    else
        return null;
});
var ModalView = function (props) {
    return (core_1.jsx("div", null,
        props.children,
        core_1.jsx(__1.Icon, { type: 'close', onClick: function () { return props.onClose(); } })));
};
