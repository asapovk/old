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
exports.default = (function (props) {
    var children = props.children, content = props.content, position = props.position, className = props.className, event = props.event, wrapperStyles = props.wrapperStyles;
    var distance = props.distance || 8;
    var popupRef = react_1.useRef(null);
    var triggerRef = react_1.useRef(null);
    var id = Math.random().toString();
    var styles = styles_1.default(position);
    var viewport = document.getElementById("0cd82567-7684-4147-ab02-dd3c56332364");
    react_1.useEffect(function () {
        var container = document.getElementById(id);
        container && container.addEventListener("click", handleToggle);
        document.addEventListener("mousedown", handleClickOutside);
        viewport &&
            viewport.addEventListener("scroll", setPosition, {
                capture: true,
                passive: true
            });
        setPosition();
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
            container && container.removeEventListener("click", handleToggle);
            viewport && viewport.removeEventListener("scroll", setPosition);
        };
    });
    function handleToggle() {
        if (popupRef.current) {
            popupRef.current.style.visibility =
                popupRef.current.style.visibility === "hidden" ? "visible" : "hidden";
        }
    }
    function handleClickOutside(event) {
        if (popupRef.current &&
            triggerRef.current &&
            !popupRef.current.contains(event.target) &&
            !triggerRef.current.contains(event.target)) {
            popupRef.current.style.visibility = "hidden";
        }
    }
    function setPosition() {
        if (triggerRef.current && popupRef.current) {
            var trigger = triggerRef.current.getBoundingClientRect();
            var popup = popupRef.current.getBoundingClientRect();
            var top_1 = (trigger.top + trigger.height + distance || 0).toString();
            var left = (trigger.right - popup.width || 0).toString();
            popupRef.current.style.top = top_1 + "px";
            popupRef.current.style.left = left + "px";
        }
    }
    return (core_1.jsx("div", { id: id, ref: triggerRef, css: wrapperStyles },
        children,
        react_dom_1.default.createPortal(core_1.jsx("div", { css: styles.popup, ref: popupRef, style: { visibility: "hidden", top: 0, left: 0 }, children: content, className: className }), viewport || document.body)));
});
