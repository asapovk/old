import { createClasses } from '../Styles';
import Theme from '../Styles/Theme';

// interface Classes {
//     main: string
//     label: string
//     input: string
// }

export default (theme: Theme) => (
    createClasses({
        main: {
            display: 'flex',
            flexDirection: 'column',
            '&-label': {
                fontSize: '12px',
                color: theme.colors.pale,
                marginBottom: '5px',
                textTransform: 'uppercase',
            },
            '&-input': {
                appearance: 'none',
                width: '100%',
                height: '100%',
                boxSizing: 'border-box',
                resize: 'none',
                background: 'none',
                border: '1px solid',
                borderRadius: '5px',
                padding: '8px',
                outline: 'none',
                position: 'relative',
                color: 'inherit',
                fontSize: 'inherit',
            }
        },
    })
)
