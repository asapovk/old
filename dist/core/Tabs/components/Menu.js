"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var styles_1 = __importDefault(require("../styles"));
exports.default = (function (props) {
    var items = props.items, activeItemIndex = props.activeItemIndex, onItemClick = props.onItemClick;
    var menu = styles_1.default().menu;
    return (core_1.jsx(__1.Flexbox, { alignItems: 'center', mb: '2rem' }, items.map(function (item, index) {
        var isActive = index === activeItemIndex;
        return (core_1.jsx(__1.Flexbox, { key: index, css: menu.elementContainer, onClick: function () { return onItemClick(index); }, children: (core_1.jsx(__1.Flexbox, { css: menu.itemContent({ isActive: isActive }), children: item.title })) }));
    })));
});
