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
    background: utilities_1.getColors(36, 33, 38),
    interface: utilities_1.getColors(51, 47, 54),
    pale: utilities_1.getColors(80, 60, 70),
    lowlight: utilities_1.getColors(175, 162, 182),
    text: utilities_1.getColors(233, 233, 233),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(216, 15, 105),
    accents: accentColors,
    shadow: utilities_1.getColors(19, 20, 25),
    shadows: {
        button: '0px 2px 6px 0px ' + utilities_1.getColors(19, 20, 25).hex,
    },
    radius: {
        default: '2px',
        window: '4px',
        button: '4px',
    },
    gradient: {
        default: [
            utilities_1.getColors(216, 15, 105).rgba(1.0),
            utilities_1.getColors(216, 15, 105).rgba(0.8)
        ],
        buddy: [
            utilities_1.getColors(36, 33, 38).hex,
            utilities_1.getColors(216, 15, 105).hex
        ]
    }
};
