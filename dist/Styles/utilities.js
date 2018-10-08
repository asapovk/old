"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toHex = function (value) { return ("0" + value.toString(16)).slice(-2); };
exports.getColors = function (red, green, blue) {
    return {
        rgb: "rgb(" + red + "," + green + "," + blue + ")",
        rgba: function (alpha) { return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")"; },
        hex: '#' + toHex(red) + toHex(green) + toHex(blue)
    };
};
