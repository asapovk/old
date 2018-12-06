import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    name: "blackCurrant",
    background: getColors(36, 33, 38),
    background2: getColors(29, 28, 30),
    interface: getColors(51, 47, 54),
    pale: getColors(80, 60, 70),
    lowlight: getColors(175, 162, 182),
    text: getColors(233, 233, 233),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(216, 15, 105),
    accents: accentColors,
    shadow: getColors(19, 20, 25),
    shadows: {
        button: '0px 2px 6px 0px ' + getColors(19, 20, 25).hex,
        table: 'none',
        card: '0px 1rem 1rem 0px ' + getColors(19, 20, 25).hex,
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid'
        },
        table: {
            width: '1px',
            style: 'solid',
            color: getColors(80, 60, 70).hex
        },
        widget: {
            width: '1px',
            style: 'solid',
            radius: '0.25rem'
        }
    },
    radius: {
        default: '2px',
        window: '0.25rem',
        button: '0.25rem',
        card: '0.5rem',
    },
    gradient: {
        default: [
            getColors(216, 15, 105).rgba(1.0),
            getColors(216, 15, 105).rgba(0.8)
        ],
        buddy: [
            getColors(36, 33, 38).hex,
            getColors(216, 15, 105).hex
        ],
        card: [
            getColors(255, 7, 118).hex,
            getColors(120, 44, 167).hex,
        ],
    },
} as ThemeInterface