"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var __1 = require("..");
var useTheme_1 = __importDefault(require("../hooks/useTheme"));
exports.default = (function (props) {
    var styles = useTheme_1.default();
    return (react_1.default.createElement(__1.Flexbox, { flex: 1, alignItems: 'center' },
        react_1.default.createElement("div", { className: 'ui-timeline-layout', style: { backgroundColor: styles.theme.background2.hex } },
            props.leftTitle && react_1.default.createElement("div", { className: 'ui-timeline-layout-titleleft' }, props.leftTitle),
            react_1.default.createElement("div", { className: 'ui-timeline-layout-line', style: { backgroundColor: styles.theme.pale.hex } }),
            props.rightTitle && react_1.default.createElement("div", { className: 'ui-timeline-layout-titleright' }, props.rightTitle)),
        react_1.default.createElement("div", { className: 'ui-timeline-dots' }, props.dots.map(function (dot, index) { return (react_1.default.createElement("div", { key: index },
            react_1.default.createElement("div", { className: 'ui-timeline-dots-top', children: dot.value }),
            react_1.default.createElement("div", { className: 'ui-timeline-dots-container', children: react_1.default.createElement("div", { className: 'ui-timeline-dots-container-dot', style: {
                        borderColor: styles.theme.background2.hex,
                        backgroundColor: styles.theme.highlight.hex
                    } }) }),
            react_1.default.createElement("div", { className: 'ui-timeline-dots-bottom', children: dot.bottomTitle }))); }))));
});
