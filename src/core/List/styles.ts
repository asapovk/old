import { css } from "@emotion/core";
import useTheme from "../../hooks/useTheme";

export default (narrowed: boolean = false) => {
	const theme = useTheme().theme;

	return {
		groupTitleContainer: css({
			display: 'inline-flex',
			marginBottom: "0.75rem",
			textOverflow: 'ellipsis',
			overflow: 'hidden',
			whiteSpace: 'nowrap',
			minWidth: 0,
			boxShadow: "0 1.25rem 2.5rem rgba(0,0,0,.1)",
			borderRadius: "1rem",
		}),

		groupTitle: css({
			padding: "0.25rem 1rem",
			borderRadius: "1rem",
			backgroundColor: "rgb(229, 228, 233)",
			...(narrowed && {
				padding: 0
			})
		}),

		row: css(
			{
				marginBottom: "1.5rem",
				overflow: "hidden",
				":last-of-type": {
					marginBottom: 0
				}
			},
			narrowed && {
				borderBottom: "1px dashed #E5E5E5",
				marginBottom: 0,
				boxSizing: "border-box",
				":last-of-type": {
					border: "none"
				}
			}
		),

		moreContainer: css({
			userSelect: "none"
		}),

		moreButton: css({
			background: theme.interface.rgb,
			borderRadius: "50%",
			padding: "0.75rem",
			boxShadow: "0 0.125rem 0.375rem rgba(0,0,0,.15)"
		})
	};
};
