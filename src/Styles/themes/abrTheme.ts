import { getColors } from '../utilities';
import { ThemeInterface } from '../';

const accentColors = {
    red: getColors(255, 25, 25),
    green: getColors(8, 191, 52),
    blue: getColors(0, 58, 93),
    orange: getColors(255, 149, 0),
}

export default {
    background: getColors(247, 247, 247),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(196, 13, 60),
    accents: accentColors,
    shadow: getColors(220, 220, 220),
    defaultRadius: '4px',
    buttonRadius: '20px',
} as ThemeInterface