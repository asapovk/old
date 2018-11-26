"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("../../");
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
var _1 = require(".");
exports.default = (function () {
    var styles = useStyles_1.default();
    var ctx = _1.useMainContext();
    var menuItems = ctx.menuItems, currentMenuItem = ctx.currentMenuItem, setCurrentMenu = ctx.setCurrentMenu;
    return (react_1.default.createElement(__1.Flexbox, { flex: 1, alignItems: 'center', justifyContent: 'center' }, menuItems.map(function (item) {
        return (react_1.default.createElement(__1.Button, { key: item.key, style: {
                backgroundColor: item.key === currentMenuItem.key ? styles.theme.highlight.rgb : '#fff',
                padding: '5px'
            }, onClick: function () { return setCurrentMenu(item); } }, item.title));
    })));
});
