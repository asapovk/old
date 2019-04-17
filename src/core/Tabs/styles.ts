import { css, keyframes } from "@emotion/core";
import useTheme from "../../hooks/useTheme";

export default (bp?: number[]) => {
	const theme = useTheme().theme;

	const breakpoints = bp ? bp : [414, 768, 1024];

	const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`);

	return {
		menu: {
			elementContainer: css({
				":not(:last-child)": {
					":after": {
						content: `'•'`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 1rem',
						fontSize: '1.75rem',
						color: theme.brand.red.rgba(.5),
					}
				}
			}),

			itemContent: (props: { isActive: boolean }) => css({
				alignItems: 'center',
				fontSize: '1.375rem',
				fontWeight: 'normal',
				textTransform: 'uppercase',
				color: theme.brand.red.hex,
				cursor: 'pointer',
				lineHeight: '2.5rem',
				transition: 'font-size .15s linear',
				willChange: 'font-size',
			}, props.isActive && {
				fontSize: '2.75rem',
				fontWeight: 900,
				color: theme.text.hex
			})
		}
	}
};
