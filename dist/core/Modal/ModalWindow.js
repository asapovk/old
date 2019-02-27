"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var react_1 = require("react");
var ModalHeader_1 = __importDefault(require("./ModalHeader"));
exports.default = react_1.forwardRef(function (props, ref) {
    var styles = styles_1.default({
        visible: props.visible,
        center: props.center,
    });
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("div", { ref: ref, css: styles.window },
            core_1.jsx(ModalHeader_1.default, { onClosePressed: props.onClosePressed, title: props.title, subtitle: props.subtitle, hideHeader: props.hideHeader }),
            props.children)));
});
