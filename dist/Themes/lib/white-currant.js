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
    background: utilities_1.getColors(243, 240, 245),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(191, 191, 191),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    highlight: utilities_1.getColors(127, 8, 191),
    accents: accentColors,
    shadow: utilities_1.getColors(180, 180, 180),
    corner: '2px',
};
