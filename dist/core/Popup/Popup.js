"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var styles_1 = __importDefault(require("./styles"));
var initialTargetCoord = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};
exports.default = (function (props) {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(initialTargetCoord), targetCoord = _b[0], setTargetCoord = _b[1];
    var popupRef = react_1.useRef(null);
    var popupHeight = popupRef.current && popupRef.current.offsetHeight || 0;
    var popupWidth = popupRef.current && popupRef.current.offsetWidth || 0;
    var triggerRef = react_1.useRef(null);
    var handleClickOutside = function (event) {
        popupRef && !popupRef.current.contains(event.target) && setVisible(false);
    };
    var children = props.children, type = props.type, trigger = props.trigger;
    react_1.useLayoutEffect(function () {
        var triggerElement = triggerRef && react_dom_1.default.findDOMNode(triggerRef.current);
        var coords = triggerElement && triggerElement.getBoundingClientRect();
        if (coords) {
            setTargetCoord({
                top: coords.top + document.documentElement.scrollTop,
                bottom: coords.bottom + document.documentElement.scrollTop,
                left: coords.left + document.documentElement.scrollLeft,
                right: coords.right + document.documentElement.scrollLeft,
            });
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    var styles = styles_1.default(visible, props.position, targetCoord, popupHeight, popupWidth);
    var ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
    return (core_1.jsx("div", { css: styles.wrapper },
        core_1.jsx("div", { onClick: function () { return setVisible(!visible); }, ref: triggerRef, children: trigger }),
        react_dom_1.default.createPortal(core_1.jsx("div", { css: styles.popup, ref: popupRef, children: children }), ViewportHTML ? ViewportHTML : document.body)));
});
