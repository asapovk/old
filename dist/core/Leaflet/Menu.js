"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var index_1 = require("../index");
exports.default = (function (props) {
    var groups = props.groups, data = props.data, styles = props.styles, active = props.active, onChoose = props.onChoose, nameKey = props.nameKey, isMobile = props.isMobile, side = props.side, left = props.left;
    var items = data.map(function (item, index) { return (core_1.jsx(index_1.Flexbox, { alignItems: 'center', justifyContent: 'space-between', onClick: function () { return onChoose(index); }, key: 'lmi-' + index, css: styles.menu.item(index === active, groups) },
        core_1.jsx(index_1.T1, { ellipsis: true }, item[nameKey]),
        isMobile && core_1.jsx(index_1.Icon, { type: 'right', color: 'light' }))); });
    return (core_1.jsx(index_1.Flexbox, { css: styles.menu.container(side, left), column: true }, groups
        ? groups.map(function (group) {
            var Content = items.filter(function (item, index) { return data[index].groupId === group.value; });
            if (!Content.length)
                return null;
            return (core_1.jsx(index_1.Flexbox, { css: styles.menu.group, column: true, key: group.value },
                core_1.jsx(index_1.C2, { css: styles.menu.groupName }, group.label),
                core_1.jsx("div", { css: styles.menu.groupBody }, Content)));
        })
        : items));
});
