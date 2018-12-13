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
    name: "blackCurrant",
    background: utilities_1.getColors(36, 33, 38),
    background2: utilities_1.getColors(29, 28, 30),
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
        table: 'none',
        card: '0px 1rem 1rem 0px ' + utilities_1.getColors(19, 20, 25).hex,
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid',
            color: utilities_1.getColors(80, 60, 70).hex
        },
        table: {
            width: '1px',
            style: 'solid',
            color: utilities_1.getColors(80, 60, 70).hex
        },
        widget: {
            width: '1px',
            style: 'solid',
            radius: '0.25rem',
            color: utilities_1.getColors(80, 60, 70).hex
        }
    },
    radius: {
        default: '2px',
        window: '0.25rem',
        button: '0.25rem',
        card: '0.5rem',
    },
    gradient: {
        default: [
            utilities_1.getColors(216, 15, 105).rgba(1.0),
            utilities_1.getColors(216, 15, 105).rgba(0.8)
        ],
        buddy: [
            utilities_1.getColors(36, 33, 38).hex,
            utilities_1.getColors(216, 15, 105).hex
        ],
        card: [
            utilities_1.getColors(255, 7, 118).hex,
            utilities_1.getColors(120, 44, 167).hex,
        ],
    },
    scrollbar: {
        thumb: {
            size: 8,
            color: utilities_1.getColors(216, 15, 105).hex,
            borderWidth: 0,
            borderRadius: 8,
            borderColor: utilities_1.getColors(0, 0, 0).rgba(0),
        },
        backgroundColor: utilities_1.getColors(51, 47, 54).rgba(0.1),
        borderWidth: 1,
        borderRadius: 8,
        borderColor: utilities_1.getColors(51, 47, 54).rgba(0.1),
        offsetPosition: 2,
    }
};
