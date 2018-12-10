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
var Waves_1 = __importDefault(require("./animations/Waves"));
var Circles_1 = __importDefault(require("./animations/Circles"));
exports.default = (function (props) {
    var styles = useStyles_1.default();
    var classes = 'ui-card';
    if (props.active)
        classes += ' active';
    var style = props.style;
    return (react_1.default.createElement(__1.Flexbox, { flexDirection: 'column', onClick: function () { return props.onClick && props.onClick(); }, className: classes, style: __assign({}, styles.card.main(props.active), style), flex: 1 },
        props.animation === "waves" && (react_1.default.createElement(Waves_1.default, { color: styles.card.main(props.active).color, active: props.active })),
        props.animation === "circles" && (react_1.default.createElement(Circles_1.default, { color: styles.card.main(props.active).color, active: props.active }))));
});
