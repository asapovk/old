"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var alert_1 = __importDefault(require("./alert"));
var notification_1 = __importDefault(require("./notification"));
var getTheme_1 = __importDefault(require("./getTheme"));
exports.default = {
    getTheme: getTheme_1.default,
    alert: alert_1.default,
    notification: notification_1.default,
};
