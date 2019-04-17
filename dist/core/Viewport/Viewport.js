"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var emotion_theming_1 = require("emotion-theming");
var react_1 = require("react");
var styles_1 = require("../../styles");
var Viewport = /** @class */ (function (_super) {
    __extends(Viewport, _super);
    function Viewport() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            mountedActions: []
        };
        return _this;
    }
    Viewport.prototype.componentDidMount = function () {
        //@ts-ignore
        document.__uiviewport = this;
    };
    /**
     * Добавляет компонент в viewport
     * возвращает индекс
     */
    Viewport.prototype.mountAction = function (component, id, extra) {
        var index = this.state.mountedActions.length;
        this.setState({
            mountedActions: this.state.mountedActions.concat([{ component: component, id: id, extra: extra }])
        });
        return index;
    };
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    Viewport.prototype.unmountAction = function (index) {
        if (this.state.mountedActions[index]) {
            this.setState({
                mountedActions: this.state.mountedActions.filter(function (item, i) { return i !== index; })
            });
        }
    };
    /**
     * Удаляет компонент из viewport
     * по индексу
     */
    Viewport.prototype.getActionById = function (id) {
        return this.state.mountedActions.find(function (action) { return action.id === id; }) || null;
    };
    Viewport.prototype.render = function () {
        var uiStyles = styles_1.createStyles(this.props.theme);
        var mainStyle = {
            background: uiStyles.theme.background.rgb,
            color: uiStyles.theme.text.rgb
        };
        var fitStyle = {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            overflow: 'auto'
        };
        return (core_1.jsx(styles_1.StylesContext.Provider, { value: uiStyles },
            core_1.jsx(emotion_theming_1.ThemeProvider, { theme: uiStyles.theme },
                core_1.jsx("div", { "data-viewport": true, id: '0cd82567-7684-4147-ab02-dd3c56332364', className: 'ui-viewport', css: this.props.transparent
                        ? core_1.css(__assign({}, this.props.style, mainStyle))
                        : core_1.css(__assign({}, mainStyle, fitStyle, this.props.style)), children: (core_1.jsx(react_1.Fragment, null,
                        this.props.children,
                        this.state.mountedActions.map(function (action, index) { return (core_1.jsx(react_1.Fragment, { key: index }, action.component)); }),
                        core_1.jsx(core_1.Global, { styles: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                                        input {\n                                            :-webkit-autofill,\n                                            :-webkit-autofill:hover,\n                                            :-webkit-autofill:focus,\n                                            :-webkit-autofill:active {\n                                                transition: background-color 999999s ease-in-out 0s;\n                                                background: rgba(0, 0, 0, 0.0);\n                                            }\n                                        }\n                                    "], ["\n                                        input {\n                                            :-webkit-autofill,\n                                            :-webkit-autofill:hover,\n                                            :-webkit-autofill:focus,\n                                            :-webkit-autofill:active {\n                                                transition: background-color 999999s ease-in-out 0s;\n                                                background: rgba(0, 0, 0, 0.0);\n                                            }\n                                        }\n                                    "]))) }))) }))));
    };
    return Viewport;
}(react_1.Component));
exports.default = Viewport;
var templateObject_1;
