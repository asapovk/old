"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("..");
var styles_1 = __importDefault(require("./styles"));
exports.default = (function (props) {
    var activeItem = props.activeItem, items = props.items, className = props.className, onClick = props.onClick;
    var menu = styles_1.default().menu;
    return (core_1.jsx(__1.Flexbox, { className: className, alignItems: 'center' }, items.map(function (item, index) {
        var isActive = index === activeItem;
        return (core_1.jsx(__1.Flexbox, { key: item.path, css: menu.elementContainer, onClick: function () {
                onClick && onClick(item, index, item.path);
            }, children: (core_1.jsx(__1.Flexbox, { css: menu.itemContent({ isActive: isActive }), children: item.title })) }));
    })));
});
