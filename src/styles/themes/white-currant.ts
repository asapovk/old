import { ThemeInterface } from "../";
import { getColors } from "../utilities";

export default {
	name: "whiteCurrant",
	background: getColors(255, 255, 255),
	background2: getColors(246, 245, 247),
	interface: getColors(255, 255, 255),
	pale: getColors(224, 223, 225),
	light: getColors(195, 192, 196),
	lowlight: getColors(144, 142, 145),
	text: getColors(0, 0, 0),
	textOnAccent: getColors(255, 255, 255),
	highlight: getColors(107, 54, 143),
	highlightSecondary: getColors(151, 34, 125),
	disabled: getColors(198, 198, 198),
	defaultShadow: getColors(220, 220, 220),
	defaultBorderRadius: '0.5rem',
	accents: {
		red: getColors(255, 25, 25),
		green: getColors(8, 191, 52),
		blue: getColors(0, 122, 255),
		orange: getColors(255, 149, 0)
	},
	brandColors: {
		red: getColors(233, 39, 107),
		purple: getColors(96, 45, 144)
	},
	shadows: {
		button: {
			default: "0px 0.125rem 0.375rem 0px " + getColors(0, 0, 0).rgba(0.2),
			active: "0px 0.125rem 0.375rem 0px " + getColors(0, 0, 0).rgba(0),
		},
		card: {
			default: "0rem 0.5rem 0.5rem 0px " + getColors(0, 0, 0).rgba(0.14),
			active: "0rem 0.5rem 0.5rem 0px " + getColors(0, 0, 0).rgba(0.14),
		},
		table: "none",
		widget: '0px 0.5rem 0.5rem ' + getColors(0, 0, 0).rgba(0.1),
		modal: 'none',
		textfield: 'none'
	},
	borders: {
		button: {
			borderWidth: "0",
			borderStyle: "solid",
			borderColor: 'transparent',
			borderRadius: '0.25rem'
		},
		table: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: '0.5rem'
		},
		card: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: "0.5rem",
		},
		widget: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: "0.5rem",
		},
		modal: {
			borderWidth: "0px",
			borderStyle: "solid",
			borderColor: 'transparent',
			borderRadius: "0.25rem",
		},
		textfield: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: "0.25rem",
		},
		checkbox: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: "0.25rem",
		},
		datepicker: {
			borderWidth: "1px",
			borderStyle: "solid",
			borderColor: getColors(217, 217, 217).hex,
			borderRadius: "0.25rem",
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
			color: getColors(127, 8, 191).rgba(0.7),
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
