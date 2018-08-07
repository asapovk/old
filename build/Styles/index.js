"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var emotion_1 = require("emotion");
var telegram_dark_1 = require("./themes/telegram-dark");
var reset_css_1 = require("./reset.css");
exports.injectReset = function () { return emotion_1.injectGlobal(reset_css_1.default); };
function createClasses(os, parentClasses) {
    var classes = parentClasses || {};
    var keys = Object.keys(os);
    for (var i = 0; i < keys.length; ++i) {
        if (typeof os[keys[i]] === "object") {
            return createClasses(os[keys[i]], classes);
        }
        console.log(os[keys[i]]);
        classes[keys[i]] = emotion_1.css(os[keys[i]]);
    }
    return classes;
}
exports.createClasses = createClasses;
exports.themes = {
    telegramDark: telegram_dark_1.default
};
//# sourceMappingURL=index.js.map