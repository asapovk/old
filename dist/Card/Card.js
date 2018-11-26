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
var react_1 = __importDefault(require("react"));
var __1 = require("../");
var useStyles_1 = __importDefault(require("../hooks/useStyles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var classes = 'ui-card';
    if (props.active)
        classes += ' active';
    var style = props.style, title = props.title, subtitle = props.subtitle, action = props.action, info = props.info;
    return (react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', onClick: function () { return props.onClick && props.onClick(); }, className: classes, style: __assign({}, styles.card.main(props.active), style), flex: 1 },
        react_1.default.createElement(__1.Flexbox, { flexDirection: 'column' },
            react_1.default.createElement(__1.Flexbox, { className: 'ui-card-title' }, title),
            subtitle && react_1.default.createElement(__1.Flexbox, { className: 'ui-card-subtitle' }, subtitle)),
        react_1.default.createElement(__1.Flexbox, { pt: '1.5rem' },
            info && (react_1.default.createElement(__1.Flexbox, { className: 'ui-card-counter', flexDirection: 'column', flex: 1 },
                react_1.default.createElement(__1.Flexbox, { className: 'ui-card-counter-value', style: __assign({}, styles.card.counter(props.active)) }, info.value),
                react_1.default.createElement(__1.Flexbox, { className: 'ui-card-counter-description' }, info.description))),
            action && (react_1.default.createElement(__1.Flexbox, { alignItems: 'flex-end', flexBasis: 100 },
                react_1.default.createElement(__1.Button, { decoration: 'highlight', label: action.label, inversion: props.active, onClick: action.onAction, size: 'small', labelCase: 'upper', style: { width: '100%' } }))))));
});
