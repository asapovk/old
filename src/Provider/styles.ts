import { createStyles } from '../Styles';

export default (theme: any) => (
    createStyles({
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
    })
)
