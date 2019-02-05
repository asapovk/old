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
    name: "abrTheme",
    background: utilities_1.getColors(247, 247, 247),
    background2: utilities_1.getColors(240, 240, 240),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(196, 13, 60),
    accents: accentColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + utilities_1.getColors(0, 0, 0).rgba(0.2),
        table: 'none',
        card: '0px 1rem 1rem 0px ' + utilities_1.getColors(0, 0, 0).rgba(0.2),
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid'
        },
        table: {
            width: '1px',
            style: 'solid',
            color: utilities_1.getColors(217, 217, 217).hex,
        },
        widget: {
            width: '1px',
            style: 'solid',
            radius: '0.25rem',
            color: utilities_1.getColors(217, 217, 217).hex
        }
    },
    radius: {
        default: '2px',
        window: '18px',
        button: '4px',
        card: '8px',
    },
    gradient: {
        default: [
            utilities_1.getColors(196, 13, 60).rgba(1.0),
            utilities_1.getColors(196, 13, 60).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            utilities_1.getColors(196, 13, 60).hex
        ],
        card: [
            utilities_1.getColors(196, 13, 60).hex,
            utilities_1.getColors(243, 103, 103).hex,
        ],
    },
    scrollbar: {
        thumb: {
            size: 4,
            color: utilities_1.getColors(250, 250, 250).hex,
            borderWidth: 0,
            borderRadius: 4,
            borderColor: utilities_1.getColors(196, 13, 60).hex,
        },
        backgroundColor: utilities_1.getColors(196, 13, 60).rgba(0.2),
        borderWidth: 2,
        borderRadius: 6,
        borderColor: utilities_1.getColors(196, 13, 60).rgba(0),
        offsetPosition: 4,
    }
};