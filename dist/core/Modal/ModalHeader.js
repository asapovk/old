"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var Typography = __importStar(require("../Typography"));
var __1 = require("../..");
var __2 = require("..");
exports.default = (function (props) {
    var styles = styles_1.default({
        visible: true,
        center: true,
    });
    if (props.hideHeader) {
        return null;
    }
    return (core_1.jsx("div", { css: styles.header },
        core_1.jsx(__1.Flexbox, null,
            core_1.jsx(__1.Flexbox, { flex: 1, column: true },
                core_1.jsx(Typography.D1, { css: styles.header }, props.title),
                core_1.jsx(Typography.C1, { color: "lowlight", mt: '0.25rem' }, props.subtitle)),
            core_1.jsx(__2.Icon, { css: styles.cross, onClick: props.onClosePressed, type: "close", color: "light", size: "2.5rem" }))));
});
