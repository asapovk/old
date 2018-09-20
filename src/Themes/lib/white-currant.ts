import { getColors } from '../utilities';

const accentColors = {
    red: 'rgb(255, 25, 25)',
    green: 'rgb(8, 191, 52)',
    blue: 'rgb(0, 122, 255)',
    orange: 'rgb(255, 149, 0)',
}

export default {
    background: getColors(243, 240, 245),
    interface: getColors(250, 250, 250),
    pale: getColors(191, 191, 191),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    highlight: getColors(127, 8, 191),
    accents: accentColors,
    shadow: getColors(180, 180, 180),
    corner: '2px',
}