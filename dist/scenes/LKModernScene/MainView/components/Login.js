"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var core_2 = require("../../../../core");
var react_1 = require("react");
var hooks_1 = require("../../../../hooks");
exports.default = (function (props) {
    var _a = react_1.useState(false), hovered = _a[0], setHovered = _a[1];
    var styles = createStyles();
    var Avatar = props.avatar
        ? core_1.jsx("div", { css: styles.user.avatar.picture(props.avatar) })
        : props.shortname
            && core_1.jsx("div", { css: styles.user.avatar.shortname, children: (core_1.jsx("div", { children: props.shortname.slice(0, 2) })) });
    var Input = (core_1.jsx("input", { type: 'file', role: 'button', accept: 'image/png, image/jpeg', css: styles.user.avatar.input, onChange: function (event) {
            if (event.target.files && props.onAvatarChange) {
                props.onAvatarChange(event.target.files[0]);
            }
        }, onClick: function (event) { return event.currentTarget.value = ''; } }));
    var Hover = props.onAvatarChange && (core_1.jsx(react_1.Fragment, null,
        Input,
        hovered && (core_1.jsx(core_2.Flexbox, { css: styles.user.avatar.hover, children: core_1.jsx(core_2.Icon, { type: 'photo' }) }))));
    return (core_1.jsx(core_2.Flexbox, { column: true, css: styles.user.container },
        core_1.jsx(core_2.Flexbox, { css: styles.user.avatar.container, onMouseEnter: function () { return setHovered(true); }, onMouseLeave: function () { return setHovered(false); } }, Avatar),
        core_1.jsx(core_2.C1, { bold: true, css: styles.user.name, children: props.name }),
        core_1.jsx(core_2.C2, { onClick: props.onLogout, children: '\u0412\u044B\u0439\u0442\u0438', pt: '.25rem', css: core_1.css({ cursor: 'pointer' }) })));
});
var createStyles = function () {
    var typography = hooks_1.useTypography();
    return {
        user: {
            container: function (theme) { return core_1.css({
                position: 'relative',
                zIndex: 4,
                color: theme.textOnAccent.hex
            }); },
            avatar: {
                container: function (theme) { return core_1.css({
                    width: '4.5rem',
                    height: '4.5rem',
                    borderRadius: '50%',
                    borderWidth: '0.125rem',
                    borderColor: theme.textOnAccent.hex,
                    borderStyle: 'solid',
                    overflow: 'hidden',
                    cursor: 'pointer'
                }); },
                picture: function (image) { return core_1.css({
                    display: 'flex',
                    flex: 1,
                    background: "url(" + image + ") no-repeat center center",
                    backgroundSize: 'cover',
                }); },
                shortname: core_1.css({
                    display: 'flex',
                    flex: 1,
                    color: '#FFFFFF',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(180deg, #A567C2 0%, #6B368F 100%)',
                    "> div": __assign({}, typography.display[2], { width: 'inherit', textAlign: 'center', textTransform: 'uppercase' })
                }),
                hover: core_1.css({
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    background: 'black',
                    opacity: .8,
                    color: 'white',
                    fontSize: '2rem',
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
                input: core_1.css({
                    opacity: 0,
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    fontSize: '1000px !important',
                    height: '300px',
                    cursor: 'inherit',
                    zIndex: 5
                })
            },
            name: core_1.css({
                display: 'block',
                marginTop: '.75rem',
                paddingRight: '1rem'
            })
        },
    };
};
