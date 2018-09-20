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
    background: 'rgb(36, 33, 38)',
    interface: 'rgb(51, 47, 54)',
    pale: 'rgb(93, 75, 102)',
    lowlight: 'rgb(175, 162, 182)',
    text: 'rgb(233, 233, 233)',
    highlight: 'rgb(216, 15, 105)',
    accents: accentColors,
    shadow: 'rgb(19, 20, 25)',
    corner: '2px',
    color: utilities_1.getColors(36, 33, 38)
};
