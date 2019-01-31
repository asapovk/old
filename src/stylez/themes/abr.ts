import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(240, 45, 35),
    green: getColors(28, 151, 82),
    blue: getColors(0, 58, 93),
    orange: getColors(245, 169, 0),
}

export default {
    name: "abrTheme",
    background: getColors(247, 247, 247),
    background2: getColors(240, 240, 240),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(196, 13, 60),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    shadows: {
        button: '0px 2px 6px 0px ' + getColors(0, 0, 0).rgba(0.2),
        table: 'none',
        card: '0px 1rem 1rem 0px ' + getColors(0, 0, 0).rgba(0.2),
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid'
        },
        table: {
            width: '1px',
            style: 'solid',
            color: getColors(217, 217, 217).hex,
        },
        widget: {
            width: '1px',
            style: 'solid',
            radius: '0.25rem',
            color: getColors(217, 217, 217).hex
        }
    },
    radius: {
        default: '2px',
        window: '18px',
        button: '4px',
        card: '8px',
    },
    gradient: {
        default: [
            getColors(196, 13, 60).rgba(1.0),
            getColors(196, 13, 60).rgba(0.8)
        ],
        buddy: [
            "#FFFFFF",
            getColors(196, 13, 60).hex
        ],
        card: [
            getColors(196, 13, 60).hex,
            getColors(243, 103, 103).hex,
        ],
    },
    scrollbar: {
        thumb: {
            size: 4,
            color: getColors(250, 250, 250).hex,
            borderWidth: 0,
            borderRadius: 4,
            borderColor: getColors(196, 13, 60).hex,
        },
        backgroundColor: getColors(196, 13, 60).rgba(0.2),
        borderWidth: 2,
        borderRadius: 6,
        borderColor: getColors(196, 13, 60).rgba(0),
        offsetPosition: 4,
    }
} as ThemeInterface