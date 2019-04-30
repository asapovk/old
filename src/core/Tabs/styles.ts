import { css, keyframes } from "@emotion/core"
import useTheme from "../../hooks/useTheme"
import TabsTypes from './types';

export default (props: TabsTypes.StyleProps) => {
	const theme = useTheme().theme

	const MOBILE = `@media (max-width: ${768}px)`
	const DESKTOP = `@media (min-width: ${769}px)`

	return {
		container: css({
			userSelect: 'none',
			flexDirection: 'column',
			padding: '2rem',
			[MOBILE]: css({
				alignItems: props.alignMobile || 'flex-start',
			})
		}),
		menus: css({
			zIndex: 100,
			[MOBILE]: css({
				flexDirection: 'column',
				marginTop: '2rem',
				alignItems: props.alignMobile || 'flex-end',
				visibility: 'hidden',
				opacity: 0,
				flex: 1,
				backgroundColor: theme.interface.hex,
				width: "100%",
				position: "absolute",
				transform: 'translateY(-1rem)',
				transition: 'all 0.15s ease',
				padding: "1rem 2rem",
			}, props.burgerActive && {
				visibility: 'visible',
				opacity: 1,
				transform: 'translateY(0)',
			}, props.alignMobile === 'flex-start' && {
				marginLeft: '-2rem'
			}, props.alignMobile === 'flex-end' && {
				marginLeft: '2rem'
			})
		}),
		burgerButton: {
			[MOBILE]: css({
				cursor: "pointer",
				width: '1.5rem',
				height: '1rem',
				transition: 'transform 0.15s ease',
				'> *': {
					width: '1.5rem',
					height: ' 0.125rem',
					borderRadius: '0.5rem',
					transition: 'transform 0.15s ease',
					backgroundColor: theme.highlight.hex
				},
			}, props.burgerActive && {
				transform: 'translate3d(0, 0px, 0) rotate(45deg)',
				'> :first-of-type': {
					opacity: 0
				},
				'> :last-of-type': {
					transform: 'translate3d(0, -7px, 0) rotate(-90deg)'
				},
			})
		},
		burgerTitle: {
			[MOBILE]: css({
				cursor: "pointer",
				transition: 'all 0.15s ease',
				opacity: 1,
				transform: `translateX(${props.alignMobile === 'flex-end' ? '-' : ''}1rem)`,
				fontSize: '1.5rem',
				fontWeight: 900,
				color: theme.text.hex,
			}, props.burgerActive && {
				transform: 'translateX(0)',
				opacity: 0,
			}, props.alignMobile === 'center' && {
				display: 'none'
			}),
			[DESKTOP]: {
				display: 'none'
			}
		},
		menu: {
			item: (props: { isActive: boolean }) => css({
				userSelect: 'none',
				":not(:last-child)": {
					":after": {
						content: `'•'`,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin: '0 1rem',
						fontSize: '1.75rem',
						color: theme.highlight.rgba(.5),
						[MOBILE]: {
							display: 'none',
						}
					}
				}
			}),

			text: (props: { isActive: boolean }) => css({
				alignItems: 'center',
				fontSize: '1.375rem',
				fontWeight: 'normal',
				textTransform: 'uppercase',
				color: theme.highlight.hex,
				cursor: 'pointer',
				lineHeight: '2.5rem',
				transition: 'font-size .15s linear',
				willChange: 'font-size',
				letterSpacing: '-0.03em',
				[MOBILE]: {
					transition: 'none'
				},
			}, props.isActive && {
				fontSize: '2.5rem',
				fontWeight: 900,
				color: theme.text.hex,
				[MOBILE]: {
					fontSize: '1.5rem',
				},
			}),
		},
	}
}
