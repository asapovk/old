"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var index_1 = require("../index");
exports.default = (function (props) {
    var groups = props.groups, data = props.data, styles = props.styles, active = props.active, onChoose = props.onChoose, nameKey = props.nameKey, isMobile = props.isMobile;
    var items = data.map(function (item, index) { return (core_1.jsx(index_1.Flexbox, { justifyContent: 'space-between', alignItems: 'center', onClick: function () { return onChoose(index); }, key: 'lmi-' + index, flex: 1, css: styles.menu.item(index === active, groups) },
        core_1.jsx(index_1.T1, { ellipsis: true }, item[nameKey]),
        isMobile && core_1.jsx(index_1.Icon, { type: 'right', color: 'light' }))); });
    return (core_1.jsx(index_1.Flexbox, { css: styles.menu.container, column: true }, groups
        ? groups.map(function (group) {
            return (core_1.jsx(index_1.Flexbox, { css: styles.menu.group, column: true, key: group.value },
                core_1.jsx(index_1.C2, { css: styles.menu.groupName }, group.label),
                core_1.jsx("div", { css: styles.menu.groupBody }, items.filter(function (item, index) { return data[index].groupId === group.value; }))));
        })
        : items));
});
