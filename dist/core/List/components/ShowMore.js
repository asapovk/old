"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var styles_1 = __importDefault(require("../styles"));
exports.default = (function (props) {
    var styles = styles_1.default();
    var minified = props.minified, setMinified = props.setMinified;
    var moreLabel = props.moreLabel || "Раскрыть";
    var lessLabel = props.lessLabel || "Скрыть";
    return (core_1.jsx(__1.Flexbox, { mt: "2rem", column: true, alignItems: "center", justifyContent: "center", css: styles.moreContainer },
        core_1.jsx(__1.C2, { mb: "0.5rem", color: "lowlight", children: minified ? moreLabel : lessLabel }),
        core_1.jsx(__1.Flexbox, { alignItems: "center", justifyContent: "center", css: styles.moreButton },
            core_1.jsx(__1.Icon, { size: "1.75rem", color: "lowlight", type: minified ? "down_triangle" : "up_triangle", onClick: setMinified }))));
});
