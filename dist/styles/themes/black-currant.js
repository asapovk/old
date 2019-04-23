"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
exports.default = {
    name: "blackCurrant",
    background: utilities_1.getColors(36, 33, 38),
    background2: utilities_1.getColors(29, 28, 30),
    interface: utilities_1.getColors(51, 47, 54),
    pale: utilities_1.getColors(80, 60, 70),
    light: utilities_1.getColors(195, 192, 196),
    lowlight: utilities_1.getColors(175, 162, 182),
    text: utilities_1.getColors(233, 233, 233),
    textOnAccent: utilities_1.getColors(233, 233, 233),
    highlight: utilities_1.getColors(216, 15, 105),
    highlightSecondary: utilities_1.getColors(216, 15, 105),
    defaultShadow: utilities_1.getColors(19, 20, 25),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: utilities_1.getColors(255, 25, 25),
        green: utilities_1.getColors(8, 191, 52),
        blue: utilities_1.getColors(0, 122, 255),
        orange: utilities_1.getColors(255, 149, 0),
    },
    brandColors: {
        red: utilities_1.getColors(216, 15, 105),
        purple: utilities_1.getColors(216, 15, 105),
    },
    shadows: {
        button: {
            default: '0px 0.125rem 0.375rem 0px ' + utilities_1.getColors(19, 20, 25).hex,
            active: '0px 0.125rem 0.375rem 0px ' + utilities_1.getColors(19, 20, 25).rgba(0)
        },
        card: {
            default: '0px 0.0625rem 0.0625rem 0px ' + utilities_1.getColors(19, 20, 25).hex,
            active: '0px 0.0625rem 0.0625rem 0px ' + utilities_1.getColors(19, 20, 25).hex,
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
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        table: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.5rem'
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(80, 60, 70).hex,
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
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: utilities_1.getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
    },
    gradients: {
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
