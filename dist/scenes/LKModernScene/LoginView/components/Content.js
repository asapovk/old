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
var react_transition_group_1 = require("react-transition-group");
var core_2 = require("../../../../core");
var logos_1 = require("../../../../logos");
var duration = 450;
var transitionStyles = {
    entering: {
        opacity: 0,
        transform: 'translate(-10%, 0)',
    },
    entered: {
        opacity: 1,
        transform: 'translate(0, 0)',
    },
    exiting: {
        opacity: 0,
        transform: 'translate(-300%, 0)',
    },
    exited: {
        opacity: 0,
        transform: 'translate(-300%, 0)',
    },
};
exports.default = (function (props) {
    return (core_1.jsx(react_transition_group_1.CSSTransition, { timeout: duration, in: props.active, appear: true, children: function (state) { return (core_1.jsx(core_2.Flexbox, { css: core_1.css(__assign({ flexDirection: 'column', zIndex: 1, marginTop: '2.5rem', transition: "transform " + duration + "ms ease-out, opacity " + duration * 2 + "ms ease-out", willChange: 'transform, opacity', justifyContent: 'space-between', flex: 1 }, transitionStyles[state])) },
            core_1.jsx(core_2.Flexbox, { column: true, mb: '3rem' },
                core_1.jsx(core_2.Flexbox, { column: true },
                    core_1.jsx("div", { css: style.mainHeader },
                        core_1.jsx("span", null, "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C, "),
                        "\u0418\u043B\u044C\u044F!"),
                    core_1.jsx("div", { css: style.subHeader }, "\u0420\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0412\u0430\u0441 \u0441\u043D\u043E\u0432\u0430!")),
                core_1.jsx(core_2.Flexbox, { column: true, css: style.inputContainer },
                    core_1.jsx(core_2.TextField, { tabIndex: 1, decoration: 'borderless', size: 'extra-large', floatingLabel: '\u0412\u0430\u0448 \u043B\u043E\u0433\u0438\u043D' }),
                    core_1.jsx("div", { css: function (theme) { return core_1.css({ margin: '0 -4rem', borderBottom: "1px solid " + theme.pale.hex }); } }),
                    core_1.jsx(core_2.TextField, { tabIndex: 2, type: 'password', decoration: 'borderless', size: 'extra-large', floatingLabel: '\u041F\u0430\u0440\u043E\u043B\u044C' })),
                core_1.jsx(core_2.Flexbox, { mt: '1.5rem', justifyContent: 'space-between' },
                    core_1.jsx(core_2.C2, { color: 'lowlight' },
                        "\u041D\u0435\u0442 \u0443\u0447\u0435\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438? ",
                        core_1.jsx(core_2.C2, { link: true, color: 'highlightSecondary' }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")),
                    core_1.jsx(core_2.C2, { link: true }, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?")),
                core_1.jsx(core_2.Flexbox, { mt: '2.75rem' },
                    core_1.jsx(core_2.Button, { label: '\u0412\u043E\u0439\u0442\u0438', onClick: function () { return props.setActive(false); }, color: 'highlight', size: 'large', css: core_1.css({ width: '8rem' }) }))),
            core_1.jsx(core_2.Flexbox, { column: true },
                core_1.jsx(core_2.Flexbox, { mb: '2.25rem' },
                    core_1.jsx(core_2.Widget, { decoration: 'none', css: core_1.css({ width: '100%' }) },
                        core_1.jsx(core_2.Flexbox, { css: core_1.css({ height: '5rem', padding: '0 1rem' }), alignItems: 'center', justifyContent: 'space-between' },
                            core_1.jsx(core_2.C2, { color: 'lowlight', children: '\u041E\u043F\u043B\u0430\u0442\u0430 \u0431\u0435\u0437 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438' }),
                            core_1.jsx(core_2.Flexbox, { column: true, justifyContent: 'center', css: function (theme) { return core_1.css({ height: '100%', paddingLeft: '1rem', borderLeft: "1px solid " + theme.pale.hex }); } },
                                core_1.jsx(core_2.C2, { bold: true, link: true, children: '\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C' }))))),
                core_1.jsx(core_2.Flexbox, null,
                    core_1.jsx(logos_1.Smorodina, { color: '#777777', style: { width: '135px' } }))))); } }));
});
var style = {
    mainHeader: function (theme) { return core_1.css({
        fontSize: '2rem',
        fontWeight: 900,
        lineHeight: '3rem',
        "> span": {
            color: theme.lowlight.hex
        }
    }); },
    subHeader: function (theme) { return core_1.css({
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        color: theme.lowlight.hex
    }); },
    inputContainer: function (theme) { return core_1.css({
        borderRadius: '0.5rem',
        borderColor: theme.pale.hex,
        borderWidth: '1px',
        borderStyle: 'solid',
        overflow: 'hidden',
        backgroundColor: theme.interface.hex,
        marginTop: '4rem',
        boxShadow: '0 20px 40px rgba(0,0,0,.1)',
    }); },
};
