"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utilities_1 = require("../utilities");
var randomcolor_1 = __importDefault(require("randomcolor"));
var accentColors = {
    red: utilities_1.getColors(255, 25, 25),
    green: utilities_1.getColors(8, 191, 52),
    blue: utilities_1.getColors(0, 122, 255),
    orange: utilities_1.getColors(255, 149, 0),
};
var brand = {
    red: utilities_1.getColors(233, 39, 107),
    purple: utilities_1.getColors(96, 45, 144)
};
var randomColors = function (luminosity, count) {
    if (count === void 0) { count = 10; }
    return randomcolor_1.default({
        hue: utilities_1.getColors(107, 54, 143).rgba,
        format: 'hex',
        luminosity: luminosity,
        count: count
    });
};
exports.default = {
    name: "whiteCurrant",
    background: utilities_1.getColors(255, 255, 255),
    background2: utilities_1.getColors(244, 241, 246),
    interface: utilities_1.getColors(255, 255, 255),
    pale: utilities_1.getColors(224, 223, 225),
    light: utilities_1.getColors(195, 192, 196),
    lowlight: utilities_1.getColors(144, 142, 145),
    text: utilities_1.getColors(0, 0, 0),
    textOnAccent: utilities_1.getColors(255, 255, 255),
    highlight: utilities_1.getColors(107, 54, 143),
    accents: accentColors,
    brand: brand,
    randomColors: randomColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + utilities_1.getColors(0, 0, 0).rgba(0.2),
        table: 'none',
        card: '0rem .5rem .5rem 0px ' + utilities_1.getColors(0, 0, 0).rgba(0.15),
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
            radius: '0.5rem',
            color: utilities_1.getColors(217, 217, 217).hex,
        }
    },
    radius: {
        default: '2px',
        window: '0.25rem',
        button: '0.25rem',
        card: '0.5rem',
        table: '0.5rem',
    },
    gradient: {
        default: [
            utilities_1.getColors(127, 8, 191).rgba(1.0),
            utilities_1.getColors(127, 8, 191).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            utilities_1.getColors(127, 8, 191).hex,
        ],
        card: [
            utilities_1.getColors(127, 8, 191).hex,
            utilities_1.getColors(156, 58, 216).hex,
        ],
    },
    scrollbar: {
        thumb: {
            size: 8,
            color: utilities_1.getColors(127, 8, 191).rgba(0.7),
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
