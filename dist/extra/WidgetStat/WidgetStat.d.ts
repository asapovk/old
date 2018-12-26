import { Component } from 'react';
interface Props {
    loading?: boolean | string;
    className?: string;
    style?: any;
    children?: any;
    onClick?: (MouseEvent?: any) => any;
    actionTitle?: string;
    title: string;
    subtitle: string;
    subtitle2: string;
    value1: string;
    value2: string;
}
declare class WidgetStat extends Component<Props> {
    render(): JSX.Element;
}
export default WidgetStat;
