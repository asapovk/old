"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
var accentColors = {
    red: utilities_1.getColors(255, 25, 25),
    green: utilities_1.getColors(8, 191, 52),
    blue: utilities_1.getColors(0, 58, 93),
    orange: utilities_1.getColors(255, 149, 0),
};
exports.default = {
    background: utilities_1.getColors(247, 247, 247),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(196, 13, 60),
    accents: accentColors,
    shadow: utilities_1.getColors(220, 220, 220),
    defaultRadius: '4px',
    buttonRadius: '20px',
};
