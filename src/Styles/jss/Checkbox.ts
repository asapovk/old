export default (theme) => {
    return {
        main: {
            color: theme.text.rgb
        },
        input: (isRadio) => {
            return {
                color: theme.highlight.hex,
                borderColor: theme.pale.hex,
                backgroundColor: theme.interface.hex,
                borderRadius: isRadio ? '15px' : theme.radius.default
            }
        },
        inputActive: (isRadio) => {
            return {
                color: theme.highlight.hex,
                borderColor: theme.highlight.rgba(0.5),
                backgroundColor: theme.interface.hex,
                borderRadius: isRadio ? '15px' : theme.radius.default
            }
        },
        circle: {
            background: theme.text.rgb
        }
    }
}