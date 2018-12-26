"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("../styles");
/**
 * Использовать тему оформления
 */
exports.default = (function () {
    return react_1.useContext(styles_1.StylesContext);
});
