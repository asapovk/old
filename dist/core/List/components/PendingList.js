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
    var styles = styles_1.default(props.narrowed);
    var className = props.className, rowRender = props.rowRender, groupKey = props.groupKey;
    var data = new Array(3).fill('');
    var Wrapper = props.narrowed ? __1.Widget : __1.Flexbox;
    var RowWrapper = props.narrowed ? __1.Flexbox : __1.Widget;
    return (core_1.jsx("div", { css: core_1.css({ marginTop: groupKey ? '2.5rem' : 0 }), className: className },
        core_1.jsx(Wrapper, { flex: 1, column: true, decoration: 'none' }, data.map(function (row, index) { return (core_1.jsx(RowWrapper, { css: styles.row, key: "row-" + index }, rowRender(row))); }))));
});
