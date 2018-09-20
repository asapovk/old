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
var Button_1 = require("../Button");
var Icon_1 = require("../Icon");
var Themes_1 = __importDefault(require("../Themes"));
var TableActions = function (props) { return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions' },
    react_1.default.createElement(Icon_1.Icon, { type: 'more', style: { color: props.theme.actionColor } }),
    react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions-buttons', style: {
            // TODO: gradient opacity
            background: "linear-gradient(90deg, " + props.theme.backgroundColor + " 0%, " + props.theme.backgroundColor + " 20%)"
        } }, props.actions.map(function (action, index) { return (react_1.default.createElement(Button_1.Button, { decoration: 'none', key: index, className: action.className, onClick: function (event) {
            event.stopPropagation();
            action.onAction(props.data);
        } }, action.label)); })))); };
exports.default = (function (props) { return (react_1.default.createElement(Themes_1.default, null, function (theme) { return (react_1.default.createElement(TableActions, __assign({}, props, { theme: {
        backgroundColor: theme.interface.rgb,
        actionColor: theme.highlight.rgb,
    } }))); })); });
