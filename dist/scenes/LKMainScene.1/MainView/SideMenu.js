"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../..");
var __2 = require("..");
exports.default = (function () {
    var ctx = __2.useMainContext();
    var currentMenuItem = ctx.currentMenuItem, currentSubMenuItem = ctx.currentSubMenuItem, setCurrentSubMenu = ctx.setCurrentSubMenu;
    return (react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', flex: 1 }, currentMenuItem.submenuItems.map(function (item, index) { return (react_1.default.createElement(__1.Flexbox, { pt: index === 0 ? 0 : '1.25rem', key: item.key },
        react_1.default.createElement(__1.Card, { title: item.card.title, onClick: function () { return setCurrentSubMenu(item); }, subtitle: item.card.subtitle, action: item.card.action, info: item.card.info, active: (item.key === currentSubMenuItem.key) }))); })));
});
