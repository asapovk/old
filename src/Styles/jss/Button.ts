export default (theme) => {
    return {
        main: (decoration?: string) => {
            const style: any = {
                background: theme.interface.rgb,
                boxShadow: '0px 2px 6px 0px ' + theme.shadow.rgb,
                borderRadius: theme.buttonRadius,
                color: decoration ? theme.textOnAccent.rgb : theme.text.rgb,
                borderColor: theme.pale.rgba(0)
            };
            switch (decoration) {
                case 'highlight':
                    style.background = theme.highlight.rgb
                    break;
                case 'red':
                    style.background = theme.accents.red.rgb
                    break;
                case 'green':
                    style.background = theme.accents.green.rgb
                    break;
                case 'orange':
                    style.background = theme.accents.orange.rgb
                    break;
                case 'blue':
                    style.background = theme.accents.blue.rgb
                    break;
                case 'none':
                    style.background = 'none';
                    style.border = 'none';
                    style.boxShadow = 'none';
                    style.padding = 0;
                    style.color = theme.text.rgb;
                    break;
            }
            return style;
        }
    }
}
