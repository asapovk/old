"use strict";
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
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = __importStar(require("react"));
var hooks_1 = require("../../hooks");
var react_dom_1 = __importDefault(require("react-dom"));
var styles_1 = __importDefault(require("./Styles"));
var initialTargetCoord = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
};
exports.default = (function (props) {
    var children = props.children, type = props.type, trigger = props.trigger;
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(initialTargetCoord), targetCoord = _b[0], setTargetCoord = _b[1];
    var popupRef = react_1.useRef(null);
    var triggerRef = props.triggerRef ? props.triggerRef : react_1.useRef(null);
    var ViewportHTML = document.getElementById('0cd82567-7684-4147-ab02-dd3c56332364');
    var browser = hooks_1.useBrowser();
    var styles = styles_1.default(visible, props.position, targetCoord, popupRef);
    var Portal = react_dom_1.default.createPortal(core_1.jsx("div", { css: styles.popup, ref: popupRef, children: children }), ViewportHTML ? ViewportHTML : document.body);
    react_1.useLayoutEffect(function () {
        var coord = triggerRef.current && triggerRef.current.getBoundingClientRect();
        coord && setTargetCoord({
            top: coord.top + document.documentElement.scrollTop,
            bottom: coord.bottom + document.documentElement.scrollTop,
            left: coord.left + document.documentElement.scrollLeft,
            right: coord.right + document.documentElement.scrollLeft,
        });
    }, [browser.width]);
    react_1.useEffect(function () {
        if (typeof props.visible != 'undefined')
            setVisible(props.visible);
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, [props.visible]);
    function handleClickOutside(event) {
        if (popupRef && !popupRef.current.contains(event.target)) {
            setVisible(false);
            props.onClose && props.onClose();
        }
    }
    if (props.triggerRef)
        return Portal;
    return (core_1.jsx("div", { onClick: function () { return setVisible(!visible); }, ref: triggerRef, children: [react_1.default.cloneElement(trigger, { key: '1' }), Portal], css: styles.wrapper }));
});
