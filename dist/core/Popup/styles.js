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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var hooks_1 = require("../../hooks");
exports.default = (function (visible, position, targetCoord, popupRef) {
    var theme = hooks_1.useTheme().theme;
    var typography = hooks_1.useTypography();
    var popupHeight = popupRef.current && popupRef.current.offsetHeight || 0;
    var popupWidth = popupRef.current && popupRef.current.offsetWidth || 0;
    return {
        wrapper: core_1.css({
            pointerEvents: visible ? "none" : "auto"
        }),
        popup: core_1.css(__assign({ background: theme.interface.rgb, boxShadow: "0px 2px 4px 0px " + theme.shadow.rgb, position: "absolute", borderWidth: "0.5px", borderStyle: "solid", borderColor: theme.pale.rgb, padding: "0.5rem 1rem", color: theme.text.rgb, fontSize: ".875rem", borderRadius: "0.25rem", visibility: "hidden", opacity: 0, pointerEvents: "none", transition: "all .2s ease-in-out" }, getPosition(position, targetCoord, popupHeight, popupWidth)), visible && {
            opacity: 1,
            visibility: "visible",
            pointerEvents: "auto"
        })
    };
});
function getPosition(initialPosition, targetCoord, popupHeight, popupWidth) {
    var browser = hooks_1.useBrowser();
    var position = {
        top: 0,
        left: 0
    };
    var posTop = browser.height / 2 > targetCoord.top;
    var posLeft = browser.width / 2 > targetCoord.left;
    switch (initialPosition) {
        case 'bottom-right':
            position = { top: 0, left: 0 };
            break;
        case 'bottom-center':
            position = { top: 0, left: 0 };
            break;
        case 'top-left':
            position = { top: 0, left: 0 };
            break;
        case 'top-right':
            position = { top: 0, left: 0 };
            break;
        case 'top-center':
            position = { top: 0, left: 0 };
            break;
        case 'left-top':
            position = { top: 0, left: 0 };
            break;
        case 'left-middle':
            position = { top: 0, left: 0 };
            break;
        case 'left-bottom':
            position = { top: 0, left: 0 };
            break;
        case 'right-top':
            position = { top: 0, left: 0 };
            break;
        case 'right-middle':
            position = {
                top: targetCoord.top + Math.round((targetCoord.bottom - targetCoord.top) / 2) - popupHeight / 2,
                left: targetCoord.right + 20
            };
            break;
        case 'right-bottom':
            position = { top: 0, left: 0 };
            break;
        default:
            position = {
                top: posTop ? targetCoord.bottom + 5 : targetCoord.top - 5 - popupHeight,
                left: posLeft ? targetCoord.left : targetCoord.right - popupWidth
            };
    }
    return position;
}
