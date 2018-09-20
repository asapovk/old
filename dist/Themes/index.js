"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var black_currant_1 = __importDefault(require("./lib/black-currant"));
var white_currant_1 = __importDefault(require("./lib/white-currant"));
exports.themes = {
    blackCurrant: black_currant_1.default, whiteCurrant: white_currant_1.default
};
exports.ThemeContext = react_1.default.createContext(exports.themes.blackCurrant // default value
);
exports.default = exports.ThemeContext.Consumer;
