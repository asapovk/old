export default (theme) => {
    return {
        main: {
            color: theme.text.rgb
        },
        input: (isRadio) => {
            return {
                borderColor: theme.text.rgb,
                borderRadius: isRadio ? '15px' : theme.corner
            }
        },
        inputActive: (isRadio) => {
            return {
                borderColor: theme.highlight.rgb,
                borderRadius: isRadio ? '15px' : theme.corner
            }
        },
        circle: {
            background: theme.text.rgb
        }
    }
}