import { css } from "@emotion/core";
import useTheme from "../../hooks/useTheme";

export default (narrowed: boolean = false) => {
	const theme = useTheme().theme;

	return {
		groupTitle: css({
			width: 'fit-content',
			padding: '0.25rem 1rem',
			marginBottom: '0.75rem',
			borderRadius: '1rem',
			backgroundColor: 'rgb(229, 228, 233)',
			boxShadow: '0 1.25rem 2.5rem rgba(0,0,0,.1)',
			maxWidth: '20rem'
		}, narrowed && {
			padding: 0
		}),

		row: css({
			minHeight: '6rem',
			marginBottom: '1.5rem',
			padding: '0.875rem 2rem',
			":last-of-type": {
				marginBottom: 0
			}
		}, narrowed && {
			borderBottom: '1px dashed #E5E5E5',
			marginBottom: 0,
			boxSizing: 'border-box',
			":last-of-type": {
				border: 'none',
			}
		}),

		moreContainer: css({
			userSelect: 'none'
		}),

		moreButton: (minified: boolean) => css({
			background: theme.interface.rgb,
			borderRadius: '50%',
			padding: '0.75rem',
			boxShadow: '0 0.125rem 0.375rem rgba(0,0,0,.15)',
			"> svg": {
				transition: 'transform .25s ease-out',
				willChange: 'transform',
				transform: `rotate(${minified ? 0 : -180}deg)`
			}
		}),

	};
};