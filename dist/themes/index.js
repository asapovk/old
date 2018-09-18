"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var telegram_dark_1 = __importDefault(require("./telegram-dark"));
var clean_bright_1 = __importDefault(require("./clean-bright"));
exports.themes = {
    telegramDark: telegram_dark_1.default, cleanBright: clean_bright_1.default
};
exports.ThemeContext = react_1.default.createContext(exports.themes.telegramDark // default value
);
exports.default = exports.ThemeContext.Consumer;
