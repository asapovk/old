import { css } from "@emotion/core";
import useTheme from "../../hooks/useTheme";
import Types from "./types";

export default () => {
	const theme = useTheme().theme;

	return {
		wrapper: css({
			position: "relative",
			borderRadius: "0.5rem",
			// boxShadow: "0 1px 6px 0 rgba(32,33,36,0.28)",
			border: "1px solid " + theme.pale.rgb
		}),

		container: css({
			position: "relative",
			display: "flex",
			flexDirection: "column"
		}),

		noDataContainer: css({
			padding: "1.25rem",
			textAlign: "center"
		})
	};
};

export const rowStyles = ({ expanded, withOpacity, withoutHeaders }) => {
	const theme = useTheme().theme;

	return {
		rowWrapper: css({
			overflow: "hidden",
			boxSizing: "border-box",
			display: "flex",
			flex: 1,
			flexDirection: "column",
			backgroundColor: theme.background.hex,
			borderWidth: "0 0 1px 0",
			borderStyle: "solid",
			borderColor: theme.pale.hex,
			opacity: withOpacity ? 0.5 : 1,
			":first-of-type": {
				borderTopLeftRadius: withoutHeaders ? ".5rem" : 0,
				borderTopRightRadius: withoutHeaders ? ".5rem" : 0
			},
			":last-of-type": {
				borderWidth: 0,
				borderBottomLeftRadius: ".5rem",
				borderBottomRightRadius: ".5rem"
			}
		}, expanded && {
			// boxShadow: '0 1px 6px 0 rgba(32,33,36,0.28)', //google shadow
			border: "1px solid " + theme.pale.rgb,
			marginTop: "-1px",
			margin: "-1px -0.75rem",
			borderRadius: "0.5rem",
			zIndex: 6,
			boxShadow: theme.shadows.card.default,
			":last-of-type": {
				borderWidth: "1px",
				borderRadius: ".5rem"
			},
			":first-of-type": {
				borderRadius: ".5rem"
			}
		}),

		rowCellsWrapper: css({
			display: "flex",
			flex: 1
		}, expanded && {
			padding: "0 calc(0.75rem - 1px)"
		}),

		rowCell: ({ isAction, borders, alignment, width }) => css({
			display: "flex",
			boxSizing: "border-box",
			alignItems: "center",
			padding: "1.25rem",
			overflow: "hidden",
			justifyContent: alignment,
			fontSize: "1rem",
			borderStyle: "solid",
			borderColor: theme.pale.hex,
			borderWidth: getBorders(borders),
			flexGrow: width ? 0 : 1,
			flexShrink: 1,
			flexBasis: width ? width + "px" : 0
		}, isAction && {
			justifyContent: "flex-start",
			padding: "0"
		}),

		expandForm: css({
			display: "none",
			paddingBottom: "1.25rem",
			backgroundColor: theme.background.hex
		}, expanded && {
			display: "block"
		}),

		icon: css({
			transition: "all .15s ease-in-out",
			transform: "rotate(0)",
			cursor: "pointer"
		}, expanded && {
			transform: "rotate(90deg)"
		})
	};
};

export const paginationStyles = () => {
	const theme = useTheme().theme;

	return {
		paginationContainer: css({
			display: "flex",
			flex: 1,
			alignItems: "center",
			justifyContent: "center",
			padding: "1.25rem",
			userSelect: "none"
		}),

		paginationButton: (active: boolean) => css({
			boxSizing: "border-box",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			overflow: "hidden",
			borderColor: theme.pale.hex,
			borderStyle: "solid",
			borderWidth: "1px",
			borderRadius: "0.5rem",
			width: "2rem",
			height: "2rem",
			margin: "0 0.25rem",
			cursor: "pointer",
			color: theme.lowlight.hex,
			transition: "all .25s ease-in-out"
		}, active && {
			borderColor: theme.highlight.hex,
			color: theme.highlight.hex
		})
	};
};

export const headerStyles = () => {
	const theme = useTheme().theme;

	return {
		headerWrapper: css({
			display: "flex",
			flex: 1,
			top: 0,
			position: "sticky",
			zIndex: 1,
			borderStyle: "solid",
			borderColor: theme.pale.hex,
			borderWidth: "0 0 1px 0",
			borderRadius: "0.5rem 0.5rem 0 0",
			backgroundColor: theme.background.hex
		}),

		headerCell: ({ isAction, borders, alignment, width }) => css({
			boxSizing: "border-box",
			display: "flex",
			alignItems: "center",
			padding: "1.25rem",
			overflow: "hidden",
			justifyContent: alignment,
			fontSize: "0.875rem",
			color: theme.lowlight.hex,
			borderStyle: "solid",
			borderColor: theme.pale.hex,
			borderWidth: getBorders(borders),
			fontWeight: 600,
			lineHeight: "1rem",
			flexGrow: width ? 0 : 1,
			flexShrink: 1,
			flexBasis: width ? width + "px" : 0
		}, isAction && {
			padding: 0
		})
	};
};

export const subHeaderStyles = ({ hideHeaders }) => {
	const theme = useTheme().theme;

	return {
		subheader: css({
			backgroundColor: theme.background2.hex,
			padding: "0.5rem 1.25rem",
			borderStyle: "solid",
			borderColor: theme.pale.hex,
			borderWidth: "0 0 1px 0",
			position: "sticky",
			top: "calc(3.5rem + 1px)",
			boxSizing: "border-box",
			zIndex: 1,
			fontSize: "0.875rem",
			color: theme.lowlight.hex,
			lineHeight: "1rem"
		}, hideHeaders && {
			top: 0,
			":first-of-type": {
				borderRadius: ".5rem .5rem 0 0"
			}
		})
	};
};

export const getBorders = (borders?: Types.Borders) => {
	let borderWidth: string = "0";
	switch (borders) {
		case "all":
			borderWidth = "0 1px";
			break;
		case "left":
			borderWidth = "0 0 0 1px";
			break;
		case "right":
			borderWidth = "0 1px 0 0";
			break;
		case "none":
			borderWidth = "0";
			break;
	}
	return borderWidth;
};
