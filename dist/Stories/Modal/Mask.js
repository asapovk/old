"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Stories_1 = require("../Stories");
var useStyles_1 = __importDefault(require("../../hooks/useStyles"));
exports.default = (function () {
    var ctx = Stories_1.useStoriesContext();
    var styles = useStyles_1.default();
    return (react_1.default.createElement("div", { className: "ui-stories-modal-mask" + (ctx.active ? " ui-stories-modal-mask-visible" : ""), style: styles.modal.main }));
});
