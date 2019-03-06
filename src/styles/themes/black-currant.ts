import { getColors } from '../utilities';
import { ThemeInterface, colorsLuminosity } from '../';
import randomColor from 'randomcolor';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

const brand = {
    red: getColors(216, 15, 105),
    purple: getColors(216, 15, 105),
}

const randomColors = (luminosity: colorsLuminosity = 'bright', count: number = 10) => randomColor({
    hue: 'purple',
    format: 'hex',
    alpha: 1,
    luminosity,
    count
})

export default {
    name: "blackCurrant",
    background: getColors(36, 33, 38),
    background2: getColors(29, 28, 30),
    interface: getColors(51, 47, 54),
    pale: getColors(80, 60, 70),
    light: getColors(195, 192, 196),
    lowlight: getColors(175, 162, 182),
    text: getColors(233, 233, 233),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(216, 15, 105),
    accents: accentColors,
    brand: brand,
    randomColors: randomColors,
    shadow: getColors(19, 20, 25),
    shadows: {
        button: '0px 2px 6px 0px ' + getColors(19, 20, 25).hex,
        table: 'none',
        card: '0px 1rem 1rem 0px ' + getColors(19, 20, 25).hex,
    },
    borders: {
        button: {
            width: '1px',
            style: 'solid',
            color: getColors(80, 60, 70).hex
        },
        table: {
            width: '1px',
            style: 'solid',
            color: getColors(80, 60, 70).hex
        },
        widget: {
            width: '1px',
            style: 'solid',
            radius: '0.25rem',
            color: getColors(80, 60, 70).hex
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
    scrollbar: {
        thumb: {
            size: 8,
            color: getColors(216, 15, 105).hex,
            borderWidth: 0,
            borderRadius: 8,
            borderColor: getColors(0, 0, 0).rgba(0),
        },
        backgroundColor: getColors(51, 47, 54).rgba(0.1),
        borderWidth: 1,
        borderRadius: 8,
        borderColor: getColors(51, 47, 54).rgba(0.1),
        offsetPosition: 2,
    }
} as ThemeInterface