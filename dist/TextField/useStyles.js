"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {};
});
