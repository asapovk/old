import { ThemeInterface } from '../Themes';

export default () => {
    //@ts-ignore
    const theme = (document.__uiviewport && document.__uiviewport.theme) || blackCurrant;
    return theme as ThemeInterface;
}
