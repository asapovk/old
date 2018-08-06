import * as React from 'react';
import getStyles from './styles';
import { injectReset, getTheme } from '../Styles';
import { ThemeProvider } from 'emotion-theming'

// Connect reset styles
injectReset();

interface ProviderProps {
    theme?: string
}
class UIProvider extends React.Component<ProviderProps> {

    render() {

        const theme = getTheme(this.props.theme);
        const styles = getStyles(theme);
        return (
            <ThemeProvider theme={theme}>
                <div className={styles.ui} {...this.props} />
            </ThemeProvider>
        )
    }
}

export default UIProvider;