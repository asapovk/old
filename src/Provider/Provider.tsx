import React from 'react';
import getClasses from './styles';
import { injectReset } from '../Styles';
import { ThemeProvider } from 'emotion-theming'
import Theme from '../Styles/Theme';

interface ProviderProps {
    theme: Theme
}

class UIProvider extends React.Component<ProviderProps> {
    componentWillMount() {
        // Connect reset styles
        injectReset();
    }
    render() {
        const classes = getClasses(this.props.theme);
        return (
            <ThemeProvider theme={this.props.theme}>
                <div className={classes.ui} {...this.props} />
            </ThemeProvider>
        )
    }
}

export default UIProvider;