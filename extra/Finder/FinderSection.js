"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var FinderSection = function (props) {
    var label = props.label, children = props.children;
    var styles = styles_1.default();
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    return (core_1.jsx(react_1.Fragment, null,
        core_1.jsx(__1.Flexbox, { alignItems: "center", css: styles.navItem(active), onClick: function () { return setActive(!active); } },
            core_1.jsx("div", null, label),
            core_1.jsx(__1.Icon, { type: active ? 'up' : 'down' })),
        core_1.jsx("div", { className: 'n-children' }, active && children)));
};
exports.default = FinderSection;
