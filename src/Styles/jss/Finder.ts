export default (theme) => {
    return {
        main: {
            textColor: theme.text.rgb,
            backgroundColor: theme.background.rgb,
            borderColor: theme.pale.rgb
        },
        filter: {
            backgroundColor: theme.background.rgb,
            inputBackground: theme.interface.rgb,
            borderColor: theme.pale.rgb
        },
        nav: {
            badgeColor: theme.highlight.rgb
        }
    }
}