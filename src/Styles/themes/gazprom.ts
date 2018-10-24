import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    background: getColors(247, 247, 247),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(0, 121, 194),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    radius: {
        default: '4px',
        window: '15px',
        button: '20px',
    },
    gradient: {
        default: [
            "#28a4d9",
            getColors(0, 121, 194).hex
        ],
        buddy: [
            "#FFFFFF",
            "#007BBC"
        ],
    }
} as ThemeInterface