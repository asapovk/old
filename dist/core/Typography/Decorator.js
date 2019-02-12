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
var react_1 = require("react");
var __1 = require("..");
var react_2 = require("react");
exports.default = react_1.forwardRef(function (props, ref) {
    var Content = core_1.jsx(Header, __assign({}, props));
    if (props.menu) {
        Content = core_1.jsx(HeadersMenu, __assign({}, props));
    }
    if (props.action) {
        Content = (core_1.jsx(__1.Flexbox, { alignItems: 'baseline', justifyContent: 'space-between' },
            Content,
            core_1.jsx("div", null, props.action)));
    }
    return (core_1.jsx(__1.Flexbox, __assign({ flexDirection: 'column' }, props),
        Content,
        core_1.jsx(__1.HR, { css: core_1.css({
                marginTop: props.typography.marginBottom &&
                    '-' + props.typography.marginBottom
            }) })));
});
var Header = function (props) { return core_1.jsx(props.tag, {
    className: props.className,
    onClick: props.onClick,
    css: core_1.css(__assign({}, props.typography, { display: props.type === 'caption' ? 'inline-block' : 'block', lineHeight: props.typography.fontSize, marginRight: props.mr, paddingBottom: 'calc(0.625rem + 1px)', marginBottom: '-1px' }), props.color && {
        color: props.theme[props.color].rgb
    }, props.menu && {
        cursor: 'pointer'
    }),
}, props.children); };
var HeadersMenu = function (props) {
    var _a = react_2.useState(props.value
        ? props.value
        : props.menu[0].value), value = _a[0], setValue = _a[1];
    var onChange = function (value) {
        setValue(value);
        props.onChange && props.onChange(value);
    };
    return (core_1.jsx(__1.Flexbox, null, props.menu.map(function (item) { return (core_1.jsx(Header, __assign({ key: item.value }, __assign({}, props, {
        children: item.text,
        onClick: function () { return onChange(item.value); },
        mr: '1.5rem',
        css: value === item.value
            ? core_1.css({
                color: props.theme.text.rgb,
                borderBottom: "3px solid " + props.theme.highlight.rgb
            })
            : core_1.css({ color: props.theme.lowlight.rgb })
    })))); })));
};
