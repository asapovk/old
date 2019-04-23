"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
exports.default = {
    name: "abrTheme",
    background: utilities_1.getColors(247, 247, 247),
    background2: utilities_1.getColors(240, 240, 240),
    interface: utilities_1.getColors(250, 250, 250),
    pale: utilities_1.getColors(217, 217, 217),
    light: utilities_1.getColors(195, 192, 196),
    lowlight: utilities_1.getColors(146, 143, 148),
    text: utilities_1.getColors(38, 36, 38),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(196, 13, 60),
    highlightSecondary: utilities_1.getColors(196, 13, 60),
    defaultShadow: utilities_1.getColors(220, 220, 220),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: utilities_1.getColors(240, 45, 35),
        green: utilities_1.getColors(28, 151, 82),
        blue: utilities_1.getColors(0, 58, 93),
        orange: utilities_1.getColors(245, 169, 0),
    },
    brandColors: {
        red: utilities_1.getColors(196, 13, 60),
        purple: utilities_1.getColors(196, 13, 60),
    },
    shadows: {
        button: {
            default: '0px 0.125rem 0.375rem 0px ' + utilities_1.getColors(0, 0, 0).rgba(0.2),
            active: '0px 0.125rem 0.375rem 0px ' + utilities_1.getColors(0, 0, 0).rgba(0),
        },
        card: {
            default: '0px 1.25rem 2.5rem ' + utilities_1.getColors(0, 0, 0).rgba(0.1),
            active: '0px 1.25rem 2.5rem ' + utilities_1.getColors(0, 0, 0).rgba(0.1)
        },
        table: 'none',
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
            borderRadius: '0.25rem'
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.5rem'
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        modal: {
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: '0.25rem'
        },
        textfield: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
    },
    gradients: {
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
