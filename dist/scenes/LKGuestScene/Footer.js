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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./Styles"));
var __1 = require("../..");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (props) {
    var size = useBrowser_1.default();
    var styles = styles_1.default();
    if (size.height <= 600 || !props.footerActions) {
        return null;
    }
    return (core_1.jsx(__1.Flexbox, { flex: 1, css: styles.footer.main },
        core_1.jsx(__1.Flexbox, { flex: 1, css: styles.footer.wrapper }, props.footerActions.map(function (action, index) {
            return core_1.jsx(__1.Flexbox, { css: index > 0 ? __assign({}, styles.footer.item, styles.footer.separator) : styles.footer.item, onClick: action.onAction, flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" },
                core_1.jsx(__1.Icon, { css: styles.footer.icon, type: action.icon }),
                core_1.jsx("div", { css: styles.footer.label },
                    action.title,
                    " ",
                    core_1.jsx(__1.Icon, { type: "text-right" })));
        }))));
});
