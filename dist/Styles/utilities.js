"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toHex = function (value) { return ("0" + value.toString(16)).slice(-2); };
exports.getColors = function (red, green, blue) {
    var gray = (red * 0.3 + green * 0.59 + blue * 0.11);
    return {
        rgb: "rgb(" + red + "," + green + "," + blue + ")",
        rgba: function (alpha) { return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")"; },
        hex: '#' + toHex(red) + toHex(green) + toHex(blue),
        grayscale: "rgb(" + gray + "," + gray + "," + gray + ")"
    };
};
