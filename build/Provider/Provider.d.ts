import * as React from 'react';
import Theme from '../Styles/Theme';
interface ProviderProps {
    theme: Theme;
}
declare class UIProvider extends React.Component<ProviderProps> {
    componentWillMount(): void;
    render(): JSX.Element;
}
export default UIProvider;
