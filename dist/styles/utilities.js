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
var ColorCorrector = /** @class */ (function () {
    function ColorCorrector() {
    }
    ColorCorrector.darker = function (hex, percent) {
        return ColorCorrector.colorCorrection(hex, -percent);
    };
    ColorCorrector.lighten = function (hex, percent) {
        return ColorCorrector.colorCorrection(hex, percent);
    };
    ColorCorrector.colorCorrection = function (hex, percent) {
        var pound = (hex[0] === "#");
        if (pound)
            hex = hex.slice(1);
        var n = parseInt(hex, 16);
        var p = Math.round(2.55 * percent);
        var R = (n >> 16) + p;
        var B = (n >> 8 & 0x00FF) + p;
        var G = (n & 0x0000FF) + p;
        return (pound ? "#" : "") + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
    };
    return ColorCorrector;
}());
exports.ColorCorrector = ColorCorrector;
;
