"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
exports.default = {
    name: "gazpromTheme",
    background: utilities_1.getColors(247, 247, 247),
    background2: utilities_1.getColors(237, 239, 242),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    light: utilities_1.getColors(195, 192, 196),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(0, 106, 255),
    highlightSecondary: utilities_1.getColors(0, 106, 255),
    disabled: utilities_1.getColors(212, 212, 212),
    defaultShadow: utilities_1.getColors(220, 220, 220),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: utilities_1.getColors(255, 25, 25),
        green: utilities_1.getColors(8, 191, 52),
        blue: utilities_1.getColors(0, 122, 255),
        orange: utilities_1.getColors(255, 149, 0),
    },
    brandColors: {
        red: utilities_1.getColors(0, 106, 255),
        purple: utilities_1.getColors(0, 106, 255),
    },
    shadows: {
        button: {
            default: 'none',
            active: 'none'
        },
        card: {
            default: '0 1rem 1rem 0px ' + utilities_1.getColors(0, 0, 200).rgba(0.1),
            active: '0 1rem 1rem 0px ' + utilities_1.getColors(0, 0, 200).rgba(0),
        },
        table: '0 0 1rem 0px ' + utilities_1.getColors(0, 0, 200).rgba(0.1),
        widget: 'none',
        modal: 'none',
        textfield: 'none'
    },
    borders: {
        button: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        table: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.5rem',
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        modal: {
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: '0.25rem',
        },
        textfield: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        }
    },
    gradients: {
        default: [
            "#28a4d9",
            utilities_1.getColors(0, 121, 194).hex
        ],
        buddy: [
            "#FFFFFF",
            "#007BBC"
        ],
        card: [
            utilities_1.getColors(5, 106, 255).hex,
            utilities_1.getColors(18, 140, 214).hex
        ],
    },
    scrollbar: {
        thumb: {
            size: 8,
            color: utilities_1.getColors(0, 106, 255).rgba(0.7),
            borderWidth: 0,
            borderRadius: 8,
            borderColor: utilities_1.getColors(0, 0, 0).rgba(0),
        },
        backgroundColor: utilities_1.getColors(217, 217, 217).rgba(0.3),
        borderWidth: 0,
        borderRadius: 8,
        borderColor: utilities_1.getColors(217, 217, 217).rgba(0),
        offsetPosition: 2,
    }
};
