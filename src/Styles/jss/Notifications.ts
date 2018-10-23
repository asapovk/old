export default (theme) => {
    return {
        main: (decoration?: string) => {
            let decorationColor = theme.highlight.rgb;
            switch (decoration) {
                case 'red':
                    decorationColor = theme.accents.red.rgb
                    break;
                case 'green':
                    decorationColor = theme.accents.green.rgb
                    break;
                case 'orange':
                    decorationColor = theme.accents.orange.rgb
                    break;
                case 'blue':
                    decorationColor = theme.accents.blue.rgb
                    break;
            }
            return {
                background: theme.interface.rgb,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: theme.defaultRadius,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                borderColor: theme.pale.rgb,
                borderLeft: `4px solid ${decorationColor}`
            }
        }
    }
}
