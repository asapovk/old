"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@emotion/core");
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
exports.default = (function () {
    var theme = useTheme_1.default().theme;
    return {
        main: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            transition: all .1s;\n            user-select: none;\n        "], ["\n            transition: all .1s;\n            user-select: none;\n        "]))),
        loading: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            font-size: 24px;\n            font-weight: 500;\n        "], ["\n            font-size: 24px;\n            font-weight: 500;\n        "]))),
        loadingtext: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            font-size: 16px;\n            padding-top: 10px;\n        "], ["\n            font-size: 16px;\n            padding-top: 10px;\n        "]))),
        text: theme.text.hex,
        accent: theme.highlight.hex,
        background: theme.background.hex,
        chartTextColor: theme.lowlight.hex,
        lowlight: theme.lowlight.rgb,
    };
});
var templateObject_1, templateObject_2, templateObject_3;
