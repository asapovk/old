import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    name: "gazpromTheme",
    background: getColors(247, 247, 247),
    background2: getColors(237, 239, 242),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(0, 106, 255),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    shadows: {
        button: 'none',
        table: '0 0 1rem 0px ' + getColors(0, 0, 200).rgba(0.1),
        card: '0 1rem 1rem 0px ' + getColors(0, 0, 200).rgba(0.1),
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid',
            color: getColors(217, 217, 217).hex,
        },
        table: {
            width: '1px',
            style: 'solid',
            color: getColors(217, 217, 217).hex,
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
            getColors(0, 121, 194).hex
        ],
        buddy: [
            "#FFFFFF",
            "#007BBC"
        ],
        card: [
            getColors(5, 106, 255).hex,
            getColors(18, 140, 214).hex
        ],
    },
} as ThemeInterface