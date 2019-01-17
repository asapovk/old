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
var Styles_1 = __importDefault(require("./Styles"));
var __1 = require("../..");
var Forms_1 = __importDefault(require("./Forms"));
var hooks_1 = require("../../hooks");
exports.default = (function (props) {
    var size = hooks_1.useBrowser();
    var styles = Styles_1.default();
    var Logo = function () { return props.components ? core_1.jsx("div", { css: styles.main.logo }, props.components.logo) : null; };
    var Title = function () { return props.title ? core_1.jsx("span", { css: styles.main.title }, props.title) : null; };
    return (core_1.jsx(__1.Flexbox, { css: styles.main.container },
        core_1.jsx(__1.Flexbox, { css: styles.main.wrapper, flex: 1 },
            core_1.jsx(__1.Flexbox, { flexDirection: "column", flex: 1, justifyContent: "center" },
                core_1.jsx(__1.Flexbox, { css: styles.main.welcome, flexDirection: "column", alignSelf: "center" },
                    core_1.jsx(Logo, null),
                    core_1.jsx(Title, null),
                    core_1.jsx(Forms_1.default, __assign({}, props)))),
            size.width >= 500 &&
                props.components !== undefined &&
                props.components.right !== undefined &&
                (core_1.jsx(__1.Flexbox, { flex: 1 }, props.components.right)))));
});
