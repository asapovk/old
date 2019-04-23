"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
exports.default = {
    name: "whiteCurrant",
    background: utilities_1.getColors(255, 255, 255),
    background2: utilities_1.getColors(246, 245, 247),
    interface: utilities_1.getColors(255, 255, 255),
    pale: utilities_1.getColors(224, 223, 225),
    light: utilities_1.getColors(195, 192, 196),
    lowlight: utilities_1.getColors(144, 142, 145),
    text: utilities_1.getColors(0, 0, 0),
    textOnAccent: utilities_1.getColors(255, 255, 255),
    highlight: utilities_1.getColors(107, 54, 143),
    highlightSecondary: utilities_1.getColors(151, 34, 125),
    defaultShadow: utilities_1.getColors(220, 220, 220),
    defaultBorderRadius: '0.5rem',
    accents: {
        red: utilities_1.getColors(255, 25, 25),
        green: utilities_1.getColors(8, 191, 52),
        blue: utilities_1.getColors(0, 122, 255),
        orange: utilities_1.getColors(255, 149, 0)
    },
    brandColors: {
        red: utilities_1.getColors(233, 39, 107),
        purple: utilities_1.getColors(96, 45, 144)
    },
    shadows: {
        button: {
            default: "0px 0.125rem 0.375rem 0px " + utilities_1.getColors(0, 0, 0).rgba(0.2),
            active: "0px 0.125rem 0.375rem 0px " + utilities_1.getColors(0, 0, 0).rgba(0),
        },
        card: {
            default: "0rem 0.5rem 0.5rem 0px " + utilities_1.getColors(0, 0, 0).rgba(0.14),
            active: "0rem 0.5rem 0.5rem 0px " + utilities_1.getColors(0, 0, 0).rgba(0.14),
        },
        table: "none",
        widget: '0px 0.5rem 0.5rem ' + utilities_1.getColors(0, 0, 0).rgba(0.1),
        modal: 'none',
        textfield: 'none'
    },
    borders: {
        button: {
            borderWidth: "0",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: '0.25rem'
        },
        table: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.5rem'
        },
        card: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: "0.5rem",
        },
        widget: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: "0.5rem",
        },
        modal: {
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: "0.25rem",
        },
        textfield: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: "0.25rem",
        },
        checkbox: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: "0.25rem",
        },
        datepicker: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: "0.25rem",
        }
    },
    gradients: {
        default: [
            utilities_1.getColors(127, 8, 191).rgba(1.0),
            utilities_1.getColors(127, 8, 191).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            utilities_1.getColors(127, 8, 191).hex
        ],
        card: [
            utilities_1.getColors(254, 254, 254).hex,
            utilities_1.getColors(237, 237, 237).hex
        ]
    },
    scrollbar: {
        thumb: {
            size: 8,
            color: utilities_1.getColors(127, 8, 191).rgba(0.7),
            borderWidth: 0,
            borderRadius: 8,
            borderColor: utilities_1.getColors(0, 0, 0).rgba(0)
        },
        backgroundColor: utilities_1.getColors(217, 217, 217).rgba(0.3),
        borderWidth: 0,
        borderRadius: 8,
        borderColor: utilities_1.getColors(217, 217, 217).rgba(0),
        offsetPosition: 2
    }
};
