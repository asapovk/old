export declare type DecorationTypes = 'border-bottom' | 'borderless' | 'none';
declare namespace WidgetTypes {
    interface WidgetProps {
        label?: string;
        loading?: boolean | string;
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => any;
        className?: string;
        style?: any;
        title?: string;
        children?: any;
        decoration?: DecorationTypes;
        hoverable?: boolean;
    }
}
export default WidgetTypes;
