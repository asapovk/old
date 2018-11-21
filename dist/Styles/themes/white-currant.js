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
    name: "white-currant",
    background: utilities_1.getColors(243, 240, 245),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(127, 8, 191),
    accents: accentColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + utilities_1.getColors(220, 220, 220).hex,
        card: '0px 1rem 1rem 0px ' + utilities_1.getColors(220, 220, 220).hex,
    },
    radius: {
        default: '2px',
        window: '4px',
        button: '4px',
        widget: '8px'
    },
    gradient: {
        default: [
            utilities_1.getColors(127, 8, 191).rgba(1.0),
            utilities_1.getColors(127, 8, 191).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            utilities_1.getColors(127, 8, 191).hex,
        ]
    },
};
