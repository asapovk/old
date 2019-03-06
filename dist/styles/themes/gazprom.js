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
    red: utilities_1.getColors(0, 106, 255),
    purple: utilities_1.getColors(0, 106, 255),
};
var randomColors = function (luminosity, count) {
    if (luminosity === void 0) { luminosity = 'bright'; }
    if (count === void 0) { count = 10; }
    return randomcolor_1.default({
        hue: utilities_1.getColors(0, 106, 255).rgba,
        format: 'hex',
        luminosity: luminosity,
        count: count
    });
};
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
    accents: accentColors,
    brand: brand,
    randomColors: randomColors,
    shadow: utilities_1.getColors(220, 220, 220),
    shadows: {
        button: 'none',
        table: '0 0 1rem 0px ' + utilities_1.getColors(0, 0, 200).rgba(0.1),
        card: '0 1rem 1rem 0px ' + utilities_1.getColors(0, 0, 200).rgba(0.1),
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid',
            color: utilities_1.getColors(217, 217, 217).hex,
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
            color: utilities_1.getColors(217, 217, 217).hex,
        }
    },
    radius: {
        default: '0.25rem',
        window: '0.25rem',
        button: '0.25rem',
        card: '0.5rem',
    },
    gradient: {
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
