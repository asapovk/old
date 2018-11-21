"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
var accentColors = {
    red: utilities_1.getColors(240, 45, 35),
    green: utilities_1.getColors(28, 151, 82),
    blue: utilities_1.getColors(0, 58, 93),
    orange: utilities_1.getColors(245, 169, 0),
};
exports.default = {
    name: "abr",
    background: utilities_1.getColors(247, 247, 247),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(196, 13, 60),
    accents: accentColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + utilities_1.getColors(220, 220, 220).hex,
    },
    radius: {
        default: '2px',
        window: '15px',
        button: '20px',
    },
    gradient: {
        default: [
            utilities_1.getColors(196, 13, 60).rgba(1.0),
            utilities_1.getColors(196, 13, 60).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            utilities_1.getColors(196, 13, 60).hex
        ]
    },
};
