export default (theme) => {
    return {
        main: {
            color: theme.text.rgb
        },
        input: (isRadio) => {
            return {
                borderColor: theme.text.rgb,
                borderRadius: isRadio ? '15px' : theme.defaultRadius
            }
        },
        inputActive: (isRadio) => {
            return {
                borderColor: theme.highlight.rgb,
                borderRadius: isRadio ? '15px' : theme.defaultRadius
            }
        },
        circle: {
            background: theme.text.rgb
        }
    }
}