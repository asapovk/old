"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("..");
var NavBarItem_1 = __importDefault(require("./NavBarItem"));
function MobileMenu(props) {
    var active = props.active, setActive = props.setActive, styles = props.styles;
    return (core_1.jsx(__1.Flexbox, { flexDirection: 'column', justifyContent: 'space-between', css: styles(active), onClick: function () { return setActive(!active); }, children: [
            core_1.jsx("div", { key: 1 }),
            core_1.jsx("div", { key: 2 }),
            core_1.jsx("div", { key: 3 })
        ] }));
}
exports.MobileMenu = MobileMenu;
function MobileMenuItems(props) {
    var items = props.items, value = props.value, active = props.active, onChange = props.onChange, styles = props.styles;
    return (core_1.jsx(__1.Flexbox, { alignItems: "center", flexDirection: "column", css: styles.mobile(active) }, items.map(function (item) { return (core_1.jsx(NavBarItem_1.default, { css: styles.item(value === item.value, true), key: item.value, text: item.text, value: item.value, onClick: function (value) { return onChange && onChange(value); } })); })));
}
exports.MobileMenuItems = MobileMenuItems;
