export default (theme) => {
    return {
        main: {
            labelColor: theme.lowlight.rgb
        },
        day: {
            default: {
                fontSize: 14,
                borderRadius: theme.corner,
                background: theme.interface.hex,
                borderColor: theme.background.hex,
                color: theme.text.hex,
            },
            active: {
                borderColor: theme.highlight.hex,
            },
            current: {
                background: theme.highlight.hex,
                color: "#ffffff"
            },
            anotherMonth: {
                background: theme.interface.rgba(0.3),
            },
            disabledDay: {
                opacity: 0.3
            }
        },
        monthGrid: {
            style: {
                border: "1px solid " + theme.pale.hex,
                borderTop: 0,
                top: "-" + theme.corner
            }
        },
        title: {
            style: {
                color: theme.lowlight.hex,
                background: theme.interface.hex,
                borderColor: theme.interface.hex,
            },
            weekDayStyle: {
                color: theme.lowlight.hex,
                background: theme.interface.hex,
                borderColor: theme.interface.hex,
            }
        },
    }
}