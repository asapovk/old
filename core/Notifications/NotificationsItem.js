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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../../");
var styles_1 = __importDefault(require("./styles"));
var NotificationsItem = function (props) {
    var options = props.options, onClose = props.onClose;
    var styles = styles_1.default();
    return (core_1.jsx("div", { css: styles.item },
        core_1.jsx(__1.Flexbox, null,
            core_1.jsx(__1.Flexbox, { column: true, flex: 1, alignContent: "flex-start", alignItems: "flex-start", justifyContent: "flex-start" },
                core_1.jsx("div", { css: styles.title }, options.title),
                core_1.jsx("div", { css: styles.text }, options.text),
                Array.isArray(options.buttons) && options.buttons.length > 0 && (core_1.jsx(__1.Flexbox, { pt: "0.5rem", style: { width: '100%' } }, options.buttons.map(function (button, index) { return (core_1.jsx(__1.Button, __assign({ key: index, decoration: "inverse", size: "small", style: { marginRight: '0.125rem' } }, button))); })))),
            core_1.jsx(__1.Flexbox, { justifyContent: "center" },
                core_1.jsx("div", { onClick: onClose.bind(_this) },
                    core_1.jsx(__1.Icon, { type: "close" }))))));
};
exports.default = NotificationsItem;
