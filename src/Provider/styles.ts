import { createClasses } from '../Styles';
import Theme from '../Styles/Theme';

interface Classes {
    ui: string
}

export default (theme: Theme) => (
    createClasses({
        ui: {
            backgroundColor: theme.colors.pageBackground,
            color: theme.colors.text,
            height: '100%',
            width: '100%',
            fontFamily: 'Roboto',
            position: 'absolute',
            top: 0,
            left: 0,
        }
    }) as Classes
)