import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    name: "gazprom",
    background: getColors(247, 247, 247),
    background2: getColors(237, 239, 242),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    // highlight: getColors(0, 121, 194),
    highlight: getColors(0, 106, 255),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    borders: {
        button: {
            width: '1px',
            style: 'solid'
        }
    },
    shadows: {
        button: 'none',
        card: '0 1rem 1rem 0 ' + getColors(218, 228, 242).rgb
    },
    radius: {
        default: '4px',
        window: '4px',
        button: '4px',
        widget: '8px'
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
    },
} as ThemeInterface