"use strict";
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
                core_1.jsx("div", { css: styles.text }, options.text)),
            core_1.jsx(__1.Flexbox, { justifyContent: "center" },
                core_1.jsx("div", { onClick: onClose.bind(_this) },
                    core_1.jsx(__1.Icon, { type: "close" }))))));
};
exports.default = NotificationsItem;
