"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var abr_1 = __importDefault(require("./themes/abr"));
var black_currant_1 = __importDefault(require("./themes/black-currant"));
var gazprom_1 = __importDefault(require("./themes/gazprom"));
var white_currant_1 = __importDefault(require("./themes/white-currant"));
var white_currant_modern_1 = __importDefault(require("./themes/white-currant-modern"));
var global_1 = __importDefault(require("./global"));
exports.themes = {
    blackCurrant: black_currant_1.default,
    whiteCurrant: white_currant_1.default,
    whiteCurrantModern: white_currant_modern_1.default,
    abrTheme: abr_1.default,
    gazpromTheme: gazprom_1.default,
};
exports.createStyles = function (themeName) {
    var theme = themeName ? exports.themes[themeName] : exports.themes['blackCurrant'];
    return {
        theme: theme,
        global: global_1.default
    };
};
exports.StylesContext = react_1.default.createContext(exports.createStyles('blackCurrant'));
exports.default = exports.StylesContext.Consumer;
