"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var children = props.children, type = props.type, content = props.content, position = props.position, className = props.className;
    var popupRef = react_1.useRef(null);
    var triggerRef = react_1.useRef(null);
    var id = Math.random().toString();
    var styles = styles_1.default(position);
    react_1.useEffect(function () {
        var container = document.getElementById(id);
        container && container.addEventListener("click", handleToggle);
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
            container && container.removeEventListener("click", handleToggle);
        };
    }, []);
    function handleToggle() {
        if (popupRef.current) {
            popupRef.current.style.display =
                popupRef.current.style.display === "none" ? "block" : "none";
        }
    }
    function handleClickOutside(event) {
        if (popupRef.current &&
            !popupRef.current.contains(event.target) &&
            triggerRef.current &&
            !triggerRef.current.contains(event.target)) {
            popupRef.current.style.display = "none";
            props.onClose && props.onClose();
        }
    }
    return (core_1.jsx("div", { id: id, ref: triggerRef, css: core_1.css({ position: "relative" }), className: className },
        children,
        core_1.jsx("div", { css: styles.popup, ref: popupRef, children: content })));
});
