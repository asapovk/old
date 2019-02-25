"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
var react_1 = require("react");
exports.default = (function (props) {
    var imagePicker = react_1.useRef(null);
    var _a = react_1.useState(false), hovered = _a[0], setHovered = _a[1];
    var Avatar = props.user.avatar
        ? core_1.jsx("div", { css: props.styles.sidebar.user.avatar.picture(props.user.avatar) })
        : props.user.shortname
            && core_1.jsx("div", { css: props.styles.sidebar.user.avatar.shortname, children: (core_1.jsx("div", { children: props.user.shortname.slice(0, 2) })) });
    var Hover = props.user.onAvatarChange && (core_1.jsx(react_1.Fragment, null,
        core_1.jsx("input", { type: 'file', ref: imagePicker, accept: '.png,.jpg', css: core_1.css({ display: 'none' }), onChange: function (event) {
                event.target.files && props.user.onAvatarChange(event.target.files[0]);
            } }),
        hovered && (core_1.jsx(__1.Flexbox, { css: props.styles.sidebar.user.avatar.change, onClick: function () { return imagePicker.current && imagePicker.current.click(); }, children: core_1.jsx(__1.Icon, { type: 'photo' }) }))));
    return props.user && (core_1.jsx(__1.Flexbox, { column: true, css: props.styles.sidebar.user.container },
        core_1.jsx(__1.Flexbox, { css: props.styles.sidebar.user.avatar.container, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); }, onTouchStart: function () { return imagePicker.current && imagePicker.current.click(); } },
            Hover,
            Avatar),
        core_1.jsx(__1.C1, { bold: true, css: props.styles.sidebar.user.name, children: props.user.name }),
        core_1.jsx(__1.C2, { onClick: props.user.onLogout, children: '\u0412\u044B\u0439\u0442\u0438', pt: '.25rem', css: core_1.css({ cursor: 'pointer' }) })));
});
