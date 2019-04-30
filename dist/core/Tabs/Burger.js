"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("..");
exports.default = (function (props) { return (core_1.jsx(__1.Flexbox, { alignItems: "center", onClick: props.onClick },
    (props.alignMobile === 'flex-end' || props.alignMobile === 'center' || !props.alignMobile) && (core_1.jsx(__1.Flexbox, { css: props.styleTitle }, props.currentMenu.title.toUpperCase())),
    core_1.jsx(__1.Flexbox, { flexDirection: 'column', justifyContent: 'space-between', css: props.styleButton, children: [
            core_1.jsx("div", { key: 1 }),
            core_1.jsx("div", { key: 2 }),
            core_1.jsx("div", { key: 3 })
        ] }),
    (props.alignMobile === 'flex-start') && (core_1.jsx(__1.Flexbox, { css: props.styleTitle }, props.currentMenu.title.toUpperCase())))); });
