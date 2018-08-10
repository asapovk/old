"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = require("../Button");
var Icon_1 = __importDefault(require("../Icon"));
exports.default = (function (props) { return (react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions' },
    react_1.default.createElement(Icon_1.default, { type: 'more' }),
    react_1.default.createElement("div", { className: 'ui-table-content-body-row-actions-buttons' }, props.actions.map(function (action, index) { return (react_1.default.createElement(Button_1.Button, { decoration: 'none', key: index, className: action.className, onClick: function (event) {
            event.stopPropagation();
            action.onClick(props.data);
        } }, action.label)); })))); });
