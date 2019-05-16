"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var styles_1 = __importDefault(require("./styles"));
var Button_1 = require("../Button");
var Icon_1 = require("../Icon");
var TableActions = function (props) {
    var styles = styles_1.default();
    return (core_1.jsx("div", { css: styles.actions },
        core_1.jsx(Icon_1.Icon, { type: 'more', css: styles.more }),
        core_1.jsx("div", { css: styles.actionButtons, className: 'ui-table-rowover' }, props.actions.map(function (action, index) { return (core_1.jsx(Button_1.Button, { decoration: 'none', key: index, onClick: function () {
                action.onAction(props.data);
            }, children: action.label })); }))));
};
exports.default = TableActions;
