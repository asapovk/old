declare namespace WidgetTypes {
    interface WidgetProps {
        label?: string;
        loading?: boolean | string;
        onClick?: (e: React.MouseEvent<HTMLDivElement>) => any;
        className?: string;
        style?: any;
        title?: string;
        children?: any;
    }
}
export default WidgetTypes;
