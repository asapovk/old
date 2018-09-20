"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
var accentColors = {
    red: 'rgb(255, 25, 25)',
    green: 'rgb(8, 191, 52)',
    blue: 'rgb(0, 122, 255)',
    orange: 'rgb(255, 149, 0)',
};
exports.default = {
    background: utilities_1.getColors(36, 33, 38),
    interface: utilities_1.getColors(51, 47, 54),
    pale: utilities_1.getColors(93, 75, 102),
    lowlight: utilities_1.getColors(175, 162, 182),
    text: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(216, 15, 105),
    accents: accentColors,
    shadow: utilities_1.getColors(19, 20, 25),
    corner: '2px',
};
