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
    var children = props.children, content = props.content, position = props.position, className = props.className, event = props.event, wrapperStyles = props.wrapperStyles, hideOnClick = props.hideOnClick;
    var distance = props.distance || 8;
    var popupRef = react_1.useRef(null);
    var triggerRef = react_1.useRef(null);
    var id = Math.random()
        .toString(36)
        .substring(2, 15);
    var styles = styles_1.default(position);
    var viewport = document.getElementById("0cd82567-7684-4147-ab02-dd3c56332364");
    react_1.useEffect(function () {
        var container = document.getElementById(id);
        container && container.addEventListener("click", toggle);
        return function () {
            container && container.removeEventListener("click", toggle);
        };
    });
    function show() {
        if (popupRef.current) {
            setPosition();
            popupRef.current.style.visibility = "visible";
            document.addEventListener("scroll", setPosition, true);
            document.addEventListener("mouseup", handleClickOutside);
        }
    }
    function hide() {
        if (popupRef.current) {
            popupRef.current.style.visibility = "hidden";
            document.removeEventListener("scroll", setPosition, true);
            document.removeEventListener("mouseup", handleClickOutside);
        }
    }
    function toggle() {
        if (popupRef.current) {
            popupRef.current.style.visibility === "hidden" ? show() : hide();
        }
    }
    function handleClickOutside(event) {
        var outsideTrigger = triggerRef.current && !triggerRef.current.contains(event.target);
        var outsidePopup = popupRef.current && !popupRef.current.contains(event.target);
        if (outsideTrigger && (hideOnClick || outsidePopup)) {
            hide();
        }
    }
    function setPosition() {
        console.log("call");
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
