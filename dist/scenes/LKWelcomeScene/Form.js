"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var __1 = require("../..");
exports.default = (function (props) {
    var styles = props.styles;
    var Actions = (core_1.jsx(__1.Flexbox, { css: styles.form.actions.container },
        core_1.jsx(__1.Flexbox, { css: styles.form.actions.wrapper }, props.actions && props.actions.map(function (action, index) {
            return core_1.jsx(__1.Flexbox, { key: index, css: styles.form.actions.item, onClick: function () {
                    if (action.onAction) {
                        action.onAction();
                        props.onStoryClick();
                    }
                }, flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" },
                core_1.jsx(__1.Icon, { css: styles.form.actions.icon, type: action.icon, shape: 'oval' }),
                core_1.jsx(__1.C2, { link: true, align: 'center', mt: '1rem' }, action.title));
        }))));
    return (core_1.jsx(__1.Flexbox, { css: styles.form.container },
        core_1.jsx(__1.Flexbox, { css: styles.form.welcome, flexDirection: "column" },
            props.logo && core_1.jsx("div", { css: styles.form.logo }, props.logo),
            props.form,
            !props.hideActions && Actions)));
});
