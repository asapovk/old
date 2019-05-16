"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var FinderNav = function (props) {
    var label = props.label, badge = props.badge, active = props.active;
    var styles = styles_1.default();
    var expand = function () {
        if (props.setFinderMenu && typeof props.finderLevel != 'undefined') {
            props.setFinderMenu(props.finderLevel + 1, props.finderIndex, props.filter ? true : false, props.filterPlaceholder);
        }
    };
    return (core_1.jsx(__1.Flexbox, { alignItems: "center", css: styles.navItem(active), onClick: expand },
        core_1.jsx("div", null, label),
        badge ? core_1.jsx("span", { css: styles.badge }, badge) : null,
        core_1.jsx(__1.Icon, { type: 'right' })));
};
exports.default = FinderNav;
