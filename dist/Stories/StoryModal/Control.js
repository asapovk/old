"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../..");
var useBrowser_1 = __importDefault(require("../../hooks/useBrowser"));
exports.default = (function (_a) {
    var onPrev = _a.onPrev, onNext = _a.onNext;
    var browser = useBrowser_1.default();
    return (react_1.default.createElement("div", { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 } },
        react_1.default.createElement(__1.Flexbox, { justifyContent: 'space-between', flex: 1, style: { height: '100%' } },
            react_1.default.createElement("div", { style: { marginLeft: !browser.isMobile ? '-2.5rem' : '0', width: '2.5rem' } },
                react_1.default.createElement(__1.Flexbox, { style: { height: '100%' }, justifyContent: 'center', alignItems: 'center', onClick: function () { return onPrev(); }, children: react_1.default.createElement(__1.Icon, { type: "left" }) })),
            react_1.default.createElement("div", { style: { marginRight: !browser.isMobile ? '-2.5rem' : '0', width: '2.5rem' } },
                react_1.default.createElement(__1.Flexbox, { style: { height: '100%' }, justifyContent: 'center', alignItems: 'center', onClick: function () { return onNext(); }, children: react_1.default.createElement(__1.Icon, { type: "right" }) })))));
});
