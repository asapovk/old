"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Styles_1 = require("../Styles");
/**
 * Использовать тему оформления
 */
exports.default = (function () {
    return react_1.useContext(Styles_1.StylesContext);
});
