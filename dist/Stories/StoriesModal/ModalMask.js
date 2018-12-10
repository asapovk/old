"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
exports.default = (function (_a) {
    var active = _a.active;
    var styles = useStyles_1.default();
    return (react_1.default.createElement("div", { className: "ui-stories-modal-mask" + (active ? " ui-stories-modal-mask-visible" : ""), style: styles.modal.main }));
});
