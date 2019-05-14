import { ThemeInterface } from "../";
import { getColors } from "../utilities";

export default {
	name: "whiteCurrantModern",
	// background: getColors(255, 255, 255),
	// background2: getColors(246, 245, 247),
	background: getColors(246, 245, 247),
	background2: getColors(255, 255, 255),
	interface: getColors(250, 250, 250),
	pale: getColors(229, 229, 229),
	light: getColors(150, 150, 150),
	lowlight: getColors(119, 119, 119),
	text: getColors(0, 0, 0),
	textOnAccent: getColors(255, 255, 255),
	highlight: getColors(207, 0, 119),
	highlightSecondary: getColors(107, 54, 143),
	disabled: getColors(221, 221, 221),
	defaultShadow: getColors(220, 220, 220),
	defaultBorderRadius: '0.625rem',
	accents: {
		red: getColors(188, 0, 0),
		green: getColors(0, 74, 0),
		blue: getColors(0, 122, 255),
		orange: getColors(255, 149, 0)
	},
	brandColors: {
		red: getColors(233, 39, 107),
		purple: getColors(96, 45, 144)
	},
	shadows: {
		button: {
			default: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1),
			active: '0px 0.625rem 1.25rem ' + getColors(0, 0, 0).rgba(0.1),
		},
		card: {
			default: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1),
			active: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1)
		},
		table: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1),
		widget: '0px 1.25rem 2.5rem ' + getColors(0, 0, 0).rgba(0.1),
		modal: 'none',
		textfield: 'none'
	},
	borders: {
		button: {
			borderWidth: '0px',
			borderStyle: 'solid',
			borderColor: 'transparent',
			borderRadius: '0.375rem'
		},
		table: {
			borderWidth: '0px',
			borderStyle: 'solid',
			borderColor: 'transparent',
			borderRadius: '0.625rem'
		},
		widget: {
			borderWidth: '0',
			borderStyle: 'solid',
			borderColor: getColors(232, 232, 232).hex,
			borderRadius: '0.625rem',
		},
		card: {
			borderWidth: '0px',
			borderStyle: 'solid',
			borderColor: 'transparent',
			borderRadius: '0.625rem',
		},
		modal: {
			borderWidth: "0px",
			borderStyle: "solid",
			borderColor: 'transparent',
			borderRadius: '0.625rem',
		},
		textfield: {
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: getColors(232, 232, 232).hex,
			borderRadius: '0.5rem',
		},
		checkbox: {
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: getColors(232, 232, 232).hex,
			borderRadius: '0.25rem',
		},
		datepicker: {
			borderWidth: '1px',
			borderStyle: 'solid',
			borderColor: getColors(232, 232, 232).hex,
			borderRadius: '0.25rem',
		}
	},
	gradients: {
		default: [
			getColors(127, 8, 191).rgba(1.0),
			getColors(127, 8, 191).rgba(0.8)
		],
		buddy: [
			"#FFFFFF",
			getColors(127, 8, 191).hex
		],
		card: [
			getColors(254, 254, 254).hex,
			getColors(237, 237, 237).hex
		]
	},
	scrollbar: {
		thumb: {
			size: 8,
			color: getColors(220, 0, 109).rgba(0.7),
			borderWidth: 0,
			borderRadius: 8,
			borderColor: getColors(0, 0, 0).rgba(0)
		},
		backgroundColor: getColors(217, 217, 217).rgba(0.3),
		borderWidth: 0,
		borderRadius: 8,
		borderColor: getColors(217, 217, 217).rgba(0),
		offsetPosition: 2
	}
} as ThemeInterface;