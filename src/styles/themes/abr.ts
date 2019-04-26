import { ThemeInterface } from '../';
import { getColors } from '../utilities';

export default {
    name: "abrTheme",
    background: getColors(247, 247, 247),
    background2: getColors(240, 240, 240),
    interface: getColors(250, 250, 250),
    pale: getColors(217, 217, 217),
    light: getColors(195, 192, 196),
    lowlight: getColors(146, 143, 148),
    text: getColors(38, 36, 38),
    textOnAccent: getColors(233, 233, 233),
    highlight: getColors(196, 13, 60),
    highlightSecondary: getColors(196, 13, 60),
    disabled: getColors(198, 198, 198),
    defaultShadow: getColors(220, 220, 220),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: getColors(240, 45, 35),
        green: getColors(28, 151, 82),
        blue: getColors(0, 58, 93),
        orange: getColors(245, 169, 0),
    },
    brandColors: {
        red: getColors(196, 13, 60),
        purple: getColors(196, 13, 60),
    },
    shadows: {
        button: {
            default: '0px 0.125rem 0.375rem 0px ' + getColors(0, 0, 0).rgba(0.2),
            active: '0px 0.125rem 0.375rem 0px ' + getColors(0, 0, 0).rgba(0),
        },
        card: {
            default: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1),
            active: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1)
        },
        table: 'none',
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
            borderRadius: '0.25rem'
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.5rem'
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        modal: {
            borderWidth: "0px",
            borderStyle: "solid",
            borderColor: 'transparent',
            borderRadius: '0.25rem'
        },
        textfield: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(217, 217, 217).hex,
            borderRadius: '0.25rem'
        },
    },
    gradients: {
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