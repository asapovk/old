import { ThemeInterface } from '../';
import { getColors } from '../utilities';

export default {
    name: "gazpromTheme",
    background: getColors(247, 247, 247),
    background2: getColors(237, 239, 242),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    light: getColors(195, 192, 196),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(0, 106, 255),
    highlightSecondary: getColors(0, 106, 255),
    disabled: getColors(198, 198, 198),
    defaultShadow: getColors(220, 220, 220),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: getColors(255, 25, 25),
        green: getColors(8, 191, 52),
        blue: getColors(0, 122, 255),
        orange: getColors(255, 149, 0),
    },
    brandColors: {
        red: getColors(0, 106, 255),
        purple: getColors(0, 106, 255),
    },
    shadows: {
        button: {
            default: 'none',
            active: 'none'
        },
        card: {
            default: '0 1rem 1rem 0px ' + getColors(0, 0, 200).rgba(0.1),
            active: '0 1rem 1rem 0px ' + getColors(0, 0, 200).rgba(0),
        },
        table: '0 0 1rem 0px ' + getColors(0, 0, 200).rgba(0.1),
        widget: 'none',
        modal: 'none',
        textfield: 'none'
    },
    borders: {
        button: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        table: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.5rem',
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        modal: {
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: '0.25rem',
        },
        textfield: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem',
        }
    },
    gradients: {
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
    scrollbar: {
        thumb: {
            size: 8,
            color: getColors(0, 106, 255).rgba(0.7),
            borderWidth: 0,
            borderRadius: 8,
            borderColor: getColors(0, 0, 0).rgba(0),
        },
        backgroundColor: getColors(217, 217, 217).rgba(0.3),
        borderWidth: 0,
        borderRadius: 8,
        borderColor: getColors(217, 217, 217).rgba(0),
        offsetPosition: 2,
    }
} as ThemeInterface