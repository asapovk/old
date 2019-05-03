import { css } from "@emotion/core";
import useTheme from "../../hooks/useTheme";
import { DecorationTypes } from "./types";

export default (clickable: boolean, decoration?: DecorationTypes) => {
	const theme = useTheme().theme;

	return {
		container: css({
			position: "relative",
			boxSizing: "border-box",
			lineHeight: 1,
			minWidth: "15rem",
			overflow: "hidden",
			background: theme.interface.rgb,
			transition: "all .2s ease",
			userSelect: "none",
			boxShadow: theme.shadows.widget,
			...theme.borders.widget,
		}, clickable && {
			"&:hover": {
				transform: "scale(1.05)"
			},
			"&:active": {
				transform: "scale(1.03)"
			}
		}, decoration && {
			...getDecorations(decoration)
		}, decoration !== 'none' && {
			padding: "2rem",
			"@media (max-width: 768px)": {
				padding: '1.25rem'
			},
		}),

		title: css({
			paddingRight: "1rem",
			fontSize: "1.125rem",
			textTransform: "uppercase"
		}),

		loading: css({
			fontSize: "1.5rem",
			fontWeight: 500,
			textAlign: "center",
			"> svg": {
				color: theme.highlight.hex
			}
		}),

		loadingText: css({
			fontSize: "1rem",
			paddingTop: "0.75rem",
			color: theme.lowlight.hex
		}),

		icon: css({
			color: theme.highlight.hex
		})
	};
};


const getDecorations = (decoration: DecorationTypes) => {
	const theme = useTheme().theme;

	switch (decoration) {
		case 'border-bottom':
			return {
				borderWidth: `0 0 ${theme.borders.widget.borderWidth} 0`,
				borderRadius: '0',
			};
		case 'borderless':
			return {
				border: 'none'
			};
		case 'none':
		default:
			return {
				padding: 0
			};
	}
}