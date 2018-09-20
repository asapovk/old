import { getColors } from '../utilities';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 122, 255),
    orange: getColors(255, 149, 0),
}

export default {
    background: getColors(36, 33, 38),
    interface: getColors(51, 47, 54),
    pale: getColors(80, 60, 70),
    lowlight: getColors(175, 162, 182),
    text: getColors(233, 233, 233),
    highlight: getColors(216, 15, 105),
    accents: accentColors,
    shadow: getColors(19, 20, 25),
    corner: '2px',
}