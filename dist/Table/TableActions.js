"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = require("../Button");
var Icon_1 = require("../Icon");
var __1 = require("../");
var TableActions = function (props) { return (react_1.default.createElement(__1.Styles, null, function (styles) { return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions' },
    react_1.default.createElement(Icon_1.Icon, { type: 'more', style: { color: styles.table.actions.actionColor } }),
    react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions-buttons', style: {
            // TODO: gradient opacity
            background: "linear-gradient(90deg, " + styles.table.actions.backgroundColor + " 0%, " + styles.table.actions.backgroundColor + " 20%)"
        } }, props.actions.map(function (action, index) { return (react_1.default.createElement(Button_1.Button, { decoration: 'none', key: index, className: action.className, onClick: function (event) {
            event.stopPropagation();
            action.onAction(props.data);
        } }, action.label)); })))); })); };
exports.default = TableActions;
