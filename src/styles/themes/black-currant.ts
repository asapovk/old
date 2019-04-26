import { ThemeInterface } from '../';
import { getColors } from '../utilities';

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
    highlightSecondary: getColors(216, 15, 105),
    disabled: getColors(34, 34, 34),
    defaultShadow: getColors(19, 20, 25),
    defaultBorderRadius: '0.25rem',
    accents: {
        red: getColors(255, 25, 25),
        green: getColors(8, 191, 52),
        blue: getColors(0, 122, 255),
        orange: getColors(255, 149, 0),
    },
    brandColors: {
        red: getColors(216, 15, 105),
        purple: getColors(216, 15, 105),
    },
    shadows: {
        button: {
            default: '0px 0.125rem 0.375rem 0px ' + getColors(19, 20, 25).hex,
            active: '0px 0.125rem 0.375rem 0px ' + getColors(19, 20, 25).rgba(0)
        },
        card: {
            default: '0px 0.0625rem 0.0625rem 0px ' + getColors(19, 20, 25).hex,
            active: '0px 0.0625rem 0.0625rem 0px ' + getColors(19, 20, 25).hex,
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
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        table: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        card: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.5rem'
        },
        widget: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(80, 60, 70).hex,
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
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        checkbox: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
        datepicker: {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: getColors(80, 60, 70).hex,
            borderRadius: '0.25rem'
        },
    },
    gradients: {
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