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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_transition_group_1 = require("react-transition-group");
var core_2 = require("../../../../core");
var Login_1 = __importDefault(require("./Login"));
var duration = 200;
var transitionStyles = {
    entering: { transform: 'translateX(-20rem)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(-20rem)' },
    exited: { transform: 'translateX(-20rem)' },
};
exports.default = (function (props) {
    return (core_1.jsx(react_transition_group_1.CSSTransition, { timeout: duration, in: props.active, appear: true, onExited: function () { return props.setView('Login'); }, children: function (state) { return core_1.jsx("div", { css: core_1.css(__assign({ position: 'sticky', top: 0, left: 0, minHeight: '100%', zIndex: 4, display: 'flex', flexDirection: 'column', width: '16rem', boxSizing: 'border-box', padding: '2rem', transition: "transform " + duration + "ms ease-out", willChange: 'transform', WebkitBackfaceVisibility: 'hidden', WebkitTransform: 'translateZ(0)' }, transitionStyles[state])) },
            core_1.jsx(Login_1.default, { name: 'a.babyuk@icloud.com', shortname: 'AB', onLogout: function () { return props.setActive(false); } }),
            core_1.jsx(core_2.Flexbox, { flex: 1, css: styles.content }, accounts.map(function (account, index) {
                return core_1.jsx(core_2.Flexbox, { flexGrow: 0, flexShrink: 0, alignItems: 'center', css: core_1.css({ marginBottom: '1.25rem' }), key: 'card-' + index },
                    core_1.jsx(core_2.Flexbox, { alignItems: 'center', css: core_1.css({ position: 'absolute', left: index === 0 ? '-3.5rem' : '-8rem' }) },
                        core_1.jsx(ActiveIndicator, null)),
                    core_1.jsx(core_2.Card, null));
            })),
            core_1.jsx(core_2.Flexbox, { alignItems: 'flex-end', justifyContent: 'space-between' },
                core_1.jsx(core_2.Icon, { size: '4rem', type: 'smorodina', color: 'textOnAccent' }),
                core_1.jsx(core_2.C3, { mb: '0.25rem', children: 'v 1.5.5 BETA', css: function (theme) { return core_1.css({ color: theme.textOnAccent.rgba(.5) }); } }))); } }));
});
var ActiveIndicator = function () {
    return (core_1.jsx(core_2.Flexbox, { alignItems: 'center', justifyContent: 'center', css: function (theme) { return core_1.css({
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '50%',
            backgroundColor: theme.interface.rgba(0.15)
        }); } },
        core_1.jsx("div", { css: function (theme) { return core_1.css({
                width: '1.625rem',
                height: '1.625rem',
                borderRadius: '50%',
                backgroundColor: theme.interface.hex
            }); } })));
};
var accounts = [
    { label: '1000001433', value: 1 },
    { label: '1000001459', value: 2 },
];
var styles = {
    container: core_1.css({
        position: 'relative',
        top: 0,
        left: 0,
        minHeight: '100%',
        zIndex: 4,
        display: 'flex',
        flexDirection: 'column',
        width: '16rem',
        boxSizing: 'border-box',
        padding: '2rem',
        /*
        *  Chrome scroll lag repair
        */
        WebkitBackfaceVisibility: 'hidden',
        WebkitTransform: 'translateZ(0)',
    }),
    content: core_1.css({
        flexDirection: 'column',
        zIndex: 4,
        marginTop: '2.5rem'
    }),
};
