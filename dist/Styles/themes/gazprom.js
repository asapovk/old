"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
var accentColors = {
    red: utilities_1.getColors(255, 25, 25),
    green: utilities_1.getColors(8, 191, 52),
    blue: utilities_1.getColors(0, 122, 255),
    orange: utilities_1.getColors(255, 149, 0),
};
exports.default = {
    background: utilities_1.getColors(247, 247, 247),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(0, 121, 194),
    accents: accentColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: 'none'
    },
    radius: {
        default: '2px',
        window: '4px',
        button: '4px',
    },
    gradient: {
        default: [
            "#28a4d9",
            utilities_1.getColors(0, 121, 194).hex
        ],
        buddy: [
            "#FFFFFF",
            "#007BBC"
        ],
    }
};
