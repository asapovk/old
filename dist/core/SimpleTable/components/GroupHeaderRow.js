"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var TableRow_1 = __importDefault(require("./TableRow"));
exports.default = (function (props) {
    var columns = props.columns, title = props.title, styles = props.styles, expandForm = props.expandForm;
    return (core_1.jsx("div", { css: styles.groupRowContainer },
        core_1.jsx(TableRow_1.default, { last: false, columns: columns, styles: styles, header: true, groupHeader: true, expandForm: expandForm }),
        core_1.jsx("div", { css: styles.groupTitle, children: title })));
});
