import { css } from "@emotion/core";
import useTheme from "../../hooks/useTheme";

export default () => {
	const theme = useTheme().theme;

	return {
		groupTitle: css({
			width: 'fit-content',
			padding: '0.25rem 1rem',
			marginBottom: '0.75rem',
			borderRadius: '1rem',
			backgroundColor: 'rgb(229, 228, 233)',
			boxShadow: '0 1.25rem 2.5rem rgba(0,0,0,.1)'
		}),

		row: css({
			marginBottom: '1.5rem',
			padding: '1rem 2rem'
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