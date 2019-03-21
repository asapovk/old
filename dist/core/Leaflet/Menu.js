"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var index_1 = require("../index");
exports.default = (function (props) {
    var groups = props.groups, data = props.data, styles = props.styles, active = props.active, onChoose = props.onChoose, nameKey = props.nameKey;
    var items = data.map(function (item, index) { return (core_1.jsx(index_1.T1, { key: 'lmi-' + index, css: styles.menu.item(index === active, groups), children: item[nameKey], onClick: function () { return onChoose(index); } })); });
    return (core_1.jsx(index_1.Flexbox, { css: styles.menu.container, column: true }, groups
        ? groups.map(function (group) {
            return (core_1.jsx(index_1.Flexbox, { css: styles.menu.group, column: true, key: group.value },
                core_1.jsx(index_1.C2, { css: styles.menu.groupName }, group.label),
                core_1.jsx("div", { css: styles.menu.groupBody }, items.filter(function (item, index) { return data[index].groupId === group.value; }))));
        })
        : items));
});
