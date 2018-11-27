import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    name: "white-currant",
    background: getColors(243, 240, 245),
    background2: getColors(240, 230, 237),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(127, 8, 191),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + getColors(0, 0, 0).rgba(0.2),
        card: '0px 1rem 1rem 0px ' + getColors(0, 0, 0).rgba(0.2),
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid'
        }
    },
    radius: {
        default: '2px',
        window: '4px',
        button: '4px',
        widget: '8px'
    },
    gradient: {
        default: [
            getColors(127, 8, 191).rgba(1.0),
            getColors(127, 8, 191).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            getColors(127, 8, 191).hex,
        ]
    },
} as ThemeInterface